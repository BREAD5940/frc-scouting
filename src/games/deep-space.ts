/**
 * Code specific to the 2019 FRC game: Deep Space
 *
 * @author Annika
 */

import type {Alliance, MatchData} from '../match';
import type {Transaction} from 'better-sqlite3';
import {GamePieceTracker, Match} from '../match';
import {SQLStoragePlan} from '../storage/sqlite';
import {readFileSync} from 'fs';
import {Team} from '../team';

type GamePieceStatus = 'DROPPED' | 'SHIP' | 'ROCKET';
type HABLevel = 0 | 1 | 2 | 3;
type Rocket = 'RIGHT' | 'LEFT';
type RankingPoints = 'HAB' | 'ROCKET';
type GamePiece = 'HATCH_PANEL' | 'CARGO';


/**
 * Tracks a game piece.
 */
abstract class DeepSpaceTracker extends GamePieceTracker {
    type: GamePiece;
    /** status:number of pieces */
    results: Record<GamePieceStatus, {auto: number, teleop: number}>;
    /** doubled in auto */
    baseValue: number;
    rankingPoints = 0;

    /**
     * Constructs a new GamePieceTracker. Should be extended not called directly.
     * @param results status:number of pieces record
     */
    constructor(
        type: GamePiece, baseValue: number, results: Record<GamePieceStatus, {auto: number, teleop: number}>,
    ) {
        super();

        this.type = type;
        this.baseValue = baseValue;
        this.results = results;
    }

    /** Returns the total number of points scored */
    get totalPoints(): number {
        let total = 0;
        for (const [status, pieces] of Object.entries(this.results)) {
            if (status !== 'DROPPED') {
                total += pieces.teleop;
                total += pieces.auto * 2;
            }
        }
        return total * this.baseValue;
    }
}

/** Tracks cargo pieces */
export class CargoTracker extends DeepSpaceTracker {
    /** Creates a new CargoTracker */
    constructor(results: Record<GamePieceStatus, {auto: number, teleop: number}>) {
        super('CARGO', 3, results);
    }
}

/** Tracks hatch panels */
export class HatchPanelTracker extends DeepSpaceTracker {
    /** Creates a new HatchPieceTracker */
    constructor(results: Record<GamePieceStatus, {auto: number, teleop: number}>) {
        super('HATCH_PANEL', 2, results);
    }
}

interface DeepSpaceMatchData extends MatchData {
    helpsOthersHABClimb: boolean;
    initialHABLevel: HABLevel;
    finalHABLevel: HABLevel;
    crossesStartLine: boolean;

    cargo: CargoTracker;
    hatches: HatchPanelTracker;

    /** rocket:isAssembled */
    rocketsAssembled: Record<Rocket, boolean>;
    /** point:isGained */
    rankingPointRecord: Record<RankingPoints, boolean>;
}

/** Represents a Deep Space match */
export class DeepSpaceMatch extends Match {
    pieceTrackers: [CargoTracker, HatchPanelTracker];

    helpsOthersHABClimb: boolean;
    initialHABLevel: HABLevel;
    finalHABLevel: HABLevel;
    crossesStartLine: boolean;

    /** rocket:isAssembled */
    rocketsAssembled: Record<Rocket, boolean>;
    /** point:isGained */
    rankingPointRecord: Record<RankingPoints, boolean>;

    readonly nonPieceTrackerRankingPoints: number;
    /** Creates a new DeepSpaceMatch */
    constructor(
        teamNumber: number, type: string, number: number, alliance: Alliance,
        data: Partial<DeepSpaceMatchData> & {initialHABLevel: HABLevel},
    ) {
        super(teamNumber, type, number, alliance, [], data);

        const defaultTrackerState = {
            DROPPED: {auto: 0, teleop: 0},
            ROCKET: {auto: 0, teleop: 0},
            SHIP: {auto: 0, teleop: 0},
        };

        this.pieceTrackers = [
            data.cargo || new CargoTracker(defaultTrackerState),
            data.hatches || new HatchPanelTracker(defaultTrackerState),
        ];

        this.helpsOthersHABClimb = data.helpsOthersHABClimb || false;
        this.initialHABLevel = data.initialHABLevel;
        this.finalHABLevel = data.finalHABLevel || 0;
        this.crossesStartLine = data.crossesStartLine || false;

        this.rankingPointRecord = data.rankingPointRecord || {ROCKET: false, HAB: false};
        this.rocketsAssembled = data.rocketsAssembled || {RIGHT: false, LEFT: false};

        let rankingPoints = 0;
        // sanity checks
        if (this.rankingPointRecord.ROCKET) {
            if (!this.rocketsAssembled.LEFT && !this.rocketsAssembled.RIGHT) {
                throw new Error(
                    'Inconsistent data: the rocket ranking point has been obtained, but neither rocket is complete.',
                );
            }
            rankingPoints++;
        }

        if (this.rankingPointRecord.HAB) {
            if (this.bonusPoints < 15) {
                throw new Error(
                    'Inconsistent data: the HAB ranking point has been obtained, but there are not 15 bonus points.',
                );
            }
            rankingPoints++;
        }

        this.nonPieceTrackerRankingPoints = rankingPoints;
    }
}

/** Stores Deep Space teams/matches in SQLite */
export class DeepSpaceSQL extends SQLStoragePlan<DeepSpaceMatch> {
    matchInsertionTransaction: Transaction;
    /** constructor */
    constructor(absolutePath: string) {
        super(absolutePath);
        const schema = readFileSync(`${__dirname}/deep-space.sql`).toString();
        this.database.exec(schema);

        this.matchInsertionTransaction = this.database.transaction((m: DeepSpaceMatch, associatedTeamID?: number) => {
            const cargoTrackerID = this.insertTracker(m.pieceTrackers[0], true);
            const hatchTrackerID = this.insertTracker(m.pieceTrackers[1], false);

            const statement = this.getStatement(
                `INSERT OR REPLACE INTO matches ` +
                `(team_number, type, match_number, alliance, cargo_tracker_id, hatch_tracker_id,` +
                ` tech_fouls, fouls, yellow_card, red_card,` +
                ` estopped, borked, ranking_points, foul_points,` +
                ` bonus_points, associated_team,` +
                ` helps_hab_climb, start_hab_level, end_hab_level,` +
                ` crosses_start_line, left_rocket_assembled, right_rocket_assembled,` +
                ` hab_ranking_point, rocket_ranking_point) VALUES ` +
                `(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            );
            statement.run(
                m.teamNumber, m.type, m.number, (m.alliance === 'BLUE' ? 0 : 1), cargoTrackerID, hatchTrackerID,
                m.fouls.technical, m.fouls.regular, Number(m.cards.yellow), Number(m.cards.red),
                Number(m.emergencyStopped), Number(m.borked), m.rankingPoints, m.pointsFromFouls,
                m.bonusPoints, (associatedTeamID || null),
                Number(m.helpsOthersHABClimb), m.initialHABLevel, m.finalHABLevel,
                Number(m.crossesStartLine), Number(m.rocketsAssembled.LEFT), Number(m.rocketsAssembled.RIGHT),
                Number(m.rankingPointRecord.HAB), Number(m.rankingPointRecord.ROCKET),
            );
        });
    }

    /** Inserts a tracker. Can't be a transaction because it returns the rowid */
    private insertTracker(tracker: DeepSpaceTracker, isCargo: boolean) {
        return this.getStatement(
            `INSERT INTO ${isCargo ? `cargo` : `hatch`}_trackers ` +
            `(dropped_auto, dropped_teleop, ship_auto, ship_teleop, rocket_auto, rocket_teleop) ` +
            `VALUES (?, ?, ?, ?, ?, ?)`,
        ).run(
            tracker.results.DROPPED.auto, tracker.results.DROPPED.teleop, tracker.results.SHIP.auto,
            tracker.results.SHIP.teleop, tracker.results.ROCKET.auto, tracker.results.ROCKET.teleop,
        ).lastInsertRowid;
    }

    /** Determines whether a match can be stored by this storage plan. */
    applies(match: Match) {
        return match instanceof DeepSpaceMatch;
    }

    /** Converts data from the database to a Match */
    dbDataToMatch(data: any) {
        const cargoStatement = this.getStatement(`SELECT * FROM cargo_trackers WHERE id = ?`);
        const cargoData = cargoStatement.get(data.cargo_tracker_id);

        const hatchStatement = this.getStatement(`SELECT * FROM hatch_trackers WHERE id = ?`);
        const hatchData = hatchStatement.get(data.cargo_tracker_id);

        const cargo = new CargoTracker({
            DROPPED: {teleop: cargoData.dropped_teleop, auto: cargoData.dropped_auto},
            ROCKET: {teleop: cargoData.rocket_teleop, auto: cargoData.rocket_auto},
            SHIP: {teleop: cargoData.ship_teleop, auto: cargoData.ship_auto},
        });

        const hatches = new HatchPanelTracker({
            DROPPED: {teleop: hatchData.dropped_teleop, auto: hatchData.dropped_auto},
            ROCKET: {teleop: hatchData.rocket_teleop, auto: hatchData.rocket_auto},
            SHIP: {teleop: hatchData.ship_teleop, auto: hatchData.ship_auto},
        });

        return new DeepSpaceMatch(
            data.team_number,
            data.type,
            data.match_number,
            data.alliance === 0 ? 'BLUE' : 'RED',
            {
                cargo,
                hatches,
                initialHABLevel: data.start_hab_level,
                fouls: {technical: data.tech_fouls, regular: data.fouls},
                cards: {yellow: !!data.yellow_card, red: !!data.red_card},
                emergencyStopped: !!data.estopped,
                borked: !!data.borked,
                nonPieceTrackerRankingPoints: data.ranking_points,
                pointsFromFouls: data.foul_points,
                bonusPoints: data.bonus_points,
                helpsOthersHABClimb: data.helps_hab_climb,
                finalHABLevel: data.end_hab_level,
                crossesStartLine: data.crossesStartLine,
                rocketsAssembled: {
                    RIGHT: !!data.right_rocket_assembled,
                    LEFT: !!data.left_rocket_assembled,
                },
                rankingPointRecord: {
                    ROCKET: !!data.rocket_ranking_point,
                    HAB: !!data.hab_ranking_point,
                },
            },
        );
    }

    /** Converts data from the database into a team  */
    dbDataToTeam(data: any) {
        const matches = this.getStatement(`SELECT * FROM matches WHERE associated_team = ?`)
            .all(data.id)
            .map((matchData) => this.dbDataToMatch(matchData));

        return new Team(data.number, ...matches);
    }

    /** Inserts a match */
    insertMatch(match: DeepSpaceMatch) {
        this.matchInsertionTransaction(match);
    }

    /** Inserts a team */
    insertTeam(team: Team<DeepSpaceMatch>) {
        const id = this.getStatement(`INSERT OR REPLACE INTO teams (number) VALUES (?)`)
            .run(team.number)
            .lastInsertRowid;
        for (const match of team.matches) {
            this.matchInsertionTransaction(match, id);
        }
    }
}
