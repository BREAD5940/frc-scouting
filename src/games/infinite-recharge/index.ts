/**
 * Code specific to the 2020/2021 FRC game: Infinite Recharge
 *
 * @author Annika
 */

import type {Transaction} from 'better-sqlite3';

import {readFileSync} from 'fs';

import {Alliance, GamePieceTracker, Match, MatchData} from '../../match';
import {JSONStoragePlan} from '../../storage/json';
import {SQLStoragePlan} from '../../storage/sqlite';
import {Team} from '../../team';

type PowerCellLocation = 'LOW' | 'OUTER' | 'INNER';
type ColorWheelPosition = 'SPECIFIC_COLOR' | 'ROTATED_X_TIMES';

type NumberOfBots = 0 | 1 | 2 | 3;

const POWER_CELL_BASE_VALUES: {[key in PowerCellLocation]: number} = {
    LOW: 1,
    OUTER: 2,
    INNER: 3,
};

/**
 * Tracks a Power Cell
 */
export class PowerCellTracker extends GamePieceTracker {
    results: Record<PowerCellLocation, {auto: number, teleop: number}>;
    colorWheelSpun: boolean;

    /** creates a new PowerCellTracker */
    constructor(results: PowerCellTracker['results'], colorWheelSpun: boolean) {
        super();
        this.results = results;
        this.colorWheelSpun = colorWheelSpun;
    }

    /** the total points scored */
    get totalPoints(): number {
        // This is more readable than functional shenanigans with Object.entries(...).reduce
        let total = 0;
        for (const [location, data] of Object.entries(this.results)) {
            // Why in the heck we have to cast location I do not know
            // I used your fancily typed Records :(
            total += (data.auto * 2 + data.teleop) * POWER_CELL_BASE_VALUES[location as PowerCellLocation];
        }
        return total;
    }

    /** the number of power cells scored */
    get totalCells(): number {
        return Object.values(this.results).reduce((accumulator, data) => accumulator + data.auto + data.teleop, 0);
    }

    /** rp */
    get rankingPoints(): number {
        return ((this.colorWheelSpun && this.totalCells >= 20) ? 1 : 0); // Stage 3 shield
    }
}

/**
 * Represents the color wheel in Infinite Recharge
 */
export class ColorWheel extends GamePieceTracker {
    /** null = no special state */
    state: ColorWheelPosition | null;
    rankingPoints = 0;

    /**
     * @param cells PowerCellTracker for validation
     */
    constructor(state: ColorWheelPosition | null, cells?: PowerCellTracker) {
        super();

        // Validate if a cell tracker is specified
        if (cells) {
            if (state === 'ROTATED_X_TIMES' && cells.totalCells < 9) {
                throw new Error(`Need 9 Power Cells to rotate color wheel.`);
            }
            if (state === 'SPECIFIC_COLOR' && cells.totalCells < 20) {
                throw new Error(`Need 20 Power Cells to set color wheel to specific color.`);
            }
        }

        this.state = state;
    }

    /** gets total points */
    get totalPoints(): number {
        switch (this.state) {
        case 'SPECIFIC_COLOR':
            return 10;
        case 'ROTATED_X_TIMES':
            return 20;
        default:
            return 0;
        }
    }
}

/**
 * Represents the central Shield Generator.
 * Includes Endgame bonus point stuff (which I don't fully understand).
 */
export class ShieldGenerator extends GamePieceTracker {
    hangingBots: NumberOfBots;
    floorBots: NumberOfBots;

    isLevel: boolean;

    /** construction owo */
    constructor(hangingBots: NumberOfBots, floorBots: NumberOfBots, isLevel: boolean) {
        if (hangingBots + floorBots > 3) throw new Error(`Too many robots`);

        super();
        this.hangingBots = hangingBots;
        this.floorBots = floorBots;
        this.isLevel = isLevel;
    }

    /** total points */
    get totalPoints(): number {
        return (this.hangingBots * 25) + (this.floorBots * 5) + (this.isLevel ? 15 : 0);
    }

    /** gets total ranking points */
    get rankingPoints(): number {
        return (this.totalPoints >= 65 ? 1 : 0);
    }
}


interface InfiniteRechargeMatchData extends MatchData {
    powerCells: PowerCellTracker;
    colorWheel: ColorWheel;
    shieldGenerator: ShieldGenerator;
}

/**
 * Represents an Infinite Recharge match
 */
export class InfiniteRechargeMatch extends Match {
    pieceTrackers: [PowerCellTracker, ColorWheel, ShieldGenerator];

    /** creates a new InfiniteRechargeMatch */
    constructor(
        teamNumber: number, type: string, number: number, alliance: Alliance, data: Partial<InfiniteRechargeMatchData>,
    ) {
        super(teamNumber, type, number, alliance, [], data);
        const wheel = data.colorWheel || new ColorWheel(null);
        const cells = data.powerCells || new PowerCellTracker({
            LOW: {auto: 0, teleop: 0},
            INNER: {auto: 0, teleop: 0},
            OUTER: {auto: 0, teleop: 0},
        }, wheel.state !== null);
        this.pieceTrackers = [
            cells, wheel, data.shieldGenerator || new ShieldGenerator(0, 0, false),
        ];
    }
}

/** Stores Infinite Recharge teams/matches in SQL */
export class InfiniteRechargeSQL extends SQLStoragePlan<InfiniteRechargeMatch> {
    matchInsertionTransaction: Transaction;

    /** constructs the storage plan */
    constructor(absolutePath: string) {
        super(absolutePath);

        const schema = readFileSync(`${__dirname}/schema.sql`).toString();
        this.database.exec(schema);
        
        // Add fields to old schemas
        try {
            this.database.exec(`ALTER TABLE matches ADD COLUMN comments TEXT NOT NULL DEFAULT ''`);
            this.database.exec(`ALTER TABLE matches ADD COLUMN defended TINYINT(1) NOT NULL DEFAULT 0`);
            this.database.exec(`ALTER TABLE matches ADD COLUMN noshow TINYINT(1) NOT NULL DEFAULT 0`);
        } catch (e: any) {
            if (!e.message.includes('duplicate column name')) throw e;
        }
        

        // hahaha I am evil
        this.matchInsertionTransaction = this.database.transaction((m: InfiniteRechargeMatch, teamID?: number) => {
            const powerCells = this.insertPowerCellTracker(m.pieceTrackers[0]);
            const colorWheel = this.insertColorWheel(m.pieceTrackers[1]);
            const shieldGenerator = this.insertShieldGenerator(m.pieceTrackers[2]);

            this.getStatement(
                `INSERT OR REPLACE INTO matches ` +
                `(team_number, type, match_number, alliance,` +
                ` power_cell_tracker_id, color_wheel_id, shield_generator_id,` +
                ` tech_fouls, fouls, yellow_card, red_card,` +
                ` estopped, borked, ranking_points, foul_points,` +
                ` bonus_points, comments, defended, noshow) ` +
                `VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            ).run(
                m.teamNumber, m.type, m.number, (m.alliance === 'BLUE' ? 0 : 1),
                powerCells, colorWheel, shieldGenerator,
                m.fouls.technical, m.fouls.regular, Number(m.cards.yellow), Number(m.cards.red),
                Number(m.emergencyStopped), Number(m.borked), m.rankingPoints, m.pointsFromFouls,
                m.bonusPoints, m.comments, Number(m.defended), Number(m.noShow)
            );
        });
    }

    /** Determines whether a match can be stored by this storage plan. */
    applies(match: Match) {
        return match instanceof InfiniteRechargeMatch;
    }

    /** Converts match data from the db into a match */
    dbDataToMatch(data: any): InfiniteRechargeMatch {
        const colorWheelData = this.getStatement(`SELECT * FROM color_wheels WHERE id = ?`).get(data.color_wheel_id);
        const powerCellData = this.getStatement(`SELECT * FROM power_cell_trackers WHERE id = ?`)
            .get(data.power_cell_tracker_id);
        const shieldGeneratorData = this.getStatement(`SELECT * FROM shield_generators WHERE id = ?`)
            .get(data.shield_generator_id);

        const powerCells = new PowerCellTracker({
            LOW: {auto: powerCellData.low_auto, teleop: powerCellData.low_teleop},
            OUTER: {auto: powerCellData.outer_auto, teleop: powerCellData.outer_teleop},
            INNER: {auto: powerCellData.inner_auto, teleop: powerCellData.inner_teleop},
        }, !!powerCellData.color_wheel_spun);

        const shieldGenerator = new ShieldGenerator(
            shieldGeneratorData.hanging_bots,
            shieldGeneratorData.floor_bots,
            !!shieldGeneratorData.is_level,
        );

        let wheelState: ColorWheelPosition | null;
        switch (colorWheelData.state) {
        case 0:
            wheelState = null;
            break;
        case 1:
            wheelState = 'SPECIFIC_COLOR';
            break;
        case 2:
            wheelState = 'ROTATED_X_TIMES';
            break;
        default:
            throw new Error(`Bad color wheel state: ${colorWheelData.state}`);
        }
        const colorWheel = new ColorWheel(wheelState, powerCells);

        return new InfiniteRechargeMatch(
            data.team_number,
            data.type,
            data.match_number,
            data.alliance === 0 ? 'BLUE' : 'RED',
            {
                powerCells, shieldGenerator, colorWheel,
                fouls: {technical: data.tech_fouls, regular: data.fouls},
                cards: {yellow: !!data.yellow_card, red: !!data.red_card},
                emergencyStopped: !!data.estopped,
                borked: !!data.borked,
                nonPieceTrackerRankingPoints: data.ranking_points,
                pointsFromFouls: data.foul_points,
                bonusPoints: data.bonus_points,
                comments: data.comments,
                defended: !!data.defended,
                noShow: !!data.noshow,
            },
        );
    }

    /** Inserts a match */
    insertMatch(match: InfiniteRechargeMatch) {
        this.matchInsertionTransaction(match);
    }


    /** Inserts a power cell tracker */
    private insertPowerCellTracker(tracker: PowerCellTracker) {
        return this.getStatement(
            `INSERT INTO power_cell_trackers ` +
            `(color_wheel_spun, low_auto, low_teleop, outer_auto, outer_teleop, inner_auto, inner_teleop) ` +
            `VALUES (?, ?, ?, ?, ?, ?, ?)`,
        ).run(
            Number(tracker.colorWheelSpun), // SQLite gib boolean type pls :(((((
            tracker.results.LOW.auto, tracker.results.LOW.teleop,
            tracker.results.OUTER.auto, tracker.results.OUTER.teleop,
            tracker.results.INNER.auto, tracker.results.INNER.teleop,
        ).lastInsertRowid;
    }

    /** Inserts a color wheel */
    private insertColorWheel(wheel: ColorWheel) {
        let state;

        switch (wheel.state) {
        case 'SPECIFIC_COLOR':
            state = 1;
            break;
        case 'ROTATED_X_TIMES':
            state = 2;
            break;
        default:
            state = 0;
        }

        return this.getStatement(`INSERT INTO color_wheels (state) VALUES (?)`)
            .run(state)
            .lastInsertRowid;
    }

    /** Inserts a shield generator */
    private insertShieldGenerator(shield: ShieldGenerator) {
        return this.getStatement(`INSERT INTO shield_generators (hanging_bots, floor_bots, is_level) VALUES (?, ?, ?)`)
            .run(shield.hangingBots, shield.floorBots, Number(shield.isLevel))
            .lastInsertRowid;
    }
}

/** Stores Infinite Rhttps://github.com/TheAnnalyst/scouting-frontendecharge matches as JSON */
export class InfiniteRechargeJSON implements JSONStoragePlan<InfiniteRechargeMatch> {
    /** Checks if it applies */
    applies(data: any) {
        return data.pieceTrackers && [
            data.pieceTrackers[0]?.colorWheelSpun,
            data.pieceTrackers[1]?.state,
            data.pieceTrackers[2]?.hangingBots,
        ].every((thing) => thing !== undefined);
    }

    /** JSON => match */
    dataToMatch(data: any) {
        const powerCells = data.pieceTrackers[0];
        const colorWheel = data.pieceTrackers[1];
        const shieldGenerator = data.pieceTrackers[2];
        if (!powerCells || !colorWheel || !shieldGenerator) throw new Error(`Bad JSON data: ${data}`);

        return new InfiniteRechargeMatch(data.teamNumber, data.type, data.number, data.alliance, {
            powerCells: new PowerCellTracker({
                LOW: {auto: powerCells.results.LOW.auto, teleop: powerCells.results.LOW.teleop},
                INNER: {auto: powerCells.results.INNER.auto, teleop: powerCells.results.INNER.teleop},
                OUTER: {auto: powerCells.results.OUTER.auto, teleop: powerCells.results.OUTER.teleop},
            }, powerCells.colorWheelSpun),
            colorWheel: new ColorWheel(colorWheel.state),
            shieldGenerator: new ShieldGenerator(
                shieldGenerator.hangingBots,
                shieldGenerator.floorBots,
                shieldGenerator.isLevel,
            ),
            ...data,
        });
    }
}
