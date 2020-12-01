/**
 * Code specific to the 2020/2021 FRC game: Infinite Recharge
 *
 * @author Annika
 */

import {Alliance, GamePieceTracker, Match, MatchData} from '../match';

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