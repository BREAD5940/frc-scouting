/**
 * Code specific to the 2019 FRC game: Deep Space
 */

import type {Alliance, MatchData} from '../match';
import {GamePieceTracker, Match} from '../match';

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
    results: Record<GamePieceStatus, {autonomous: number, teleop: number}>;
    /** doubled in autonomous */
    baseValue: number;

    /** Constructs a new GamePieceTracker. Should be extended not called directly. */
    constructor(type: GamePiece, baseValue: number) {
        super();

        this.type = type;
        this.baseValue = baseValue;
        this.results = {
            DROPPED: {autonomous: 0, teleop: 0},
            SHIP: {autonomous: 0, teleop: 0},
            ROCKET: {autonomous: 0, teleop: 0},
        };
    }

    /** Returns the total number of points scored */
    get totalPoints(): number {
        let total = 0;
        for (const [status, pieces] of Object.entries(this.results)) {
            if (status !== 'DROPPED') {
                total += pieces.teleop;
                total += pieces.autonomous * 2;
            }
        }
        return total * this.baseValue;
    }
}

/** Tracks cargo pieces */
class CargoTracker extends DeepSpaceTracker {
    /** Creates a new CargoTracker */
    constructor() {
        super('CARGO', 3);
    }
}

/** Tracks hatch panels */
class HatchPanelTracker extends DeepSpaceTracker {
    /** Creates a new HatchPieceTracker */
    constructor() {
        super('HATCH_PANEL', 3);
    }
}

interface DeepSpaceMatchData extends MatchData {
    helpsOthersHABClimb: boolean;
    initialHABLevel: HABLevel;
    finalHABLevel: HABLevel;
    crossesStartLine: boolean;

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

    readonly rankingPoints: number;
    /** Creates a new DeepSpaceMatch */
    constructor(
        teamNumber: number, type: string, number: number, alliance: Alliance,
        data: Partial<DeepSpaceMatchData> & {initialHABLevel: HABLevel},
    ) {
        super(teamNumber, type, number, alliance, [], data);
        this.pieceTrackers = [new CargoTracker(), new HatchPanelTracker()];

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

        this.rankingPoints = rankingPoints;
    }
}
