/**
 * Contains code for handling FRC matches
 *
 * @author Annika
 */

export type Alliance = 'RED' | 'BLUE';

interface Fouls {
    regular: number;
    technical: number;
}

interface Cards {
    yellow: boolean;
    red: boolean;
}

/** Abstract class to track game pieces */
export abstract class GamePieceTracker {
    /** Returns the total number of points scored */
    abstract get totalPoints(): number;
}

export interface MatchData {
    fouls: Fouls;
    cards: Cards;
    emergencyStopped: boolean;
    borked: boolean;

    rankingPoints: number;
    pointsFromFouls: number;
    bonusPoints: number;
}

/**
 * Represents an FRC match. Is extended by each FRC game.
 */
export abstract class Match {
    readonly teamNumber: number;
    /* TODO: add more expressive type (I have no clue wtf a match type can be) */
    readonly type: string;
    readonly number: number;
    readonly alliance: Alliance;

    readonly pieceTrackers: GamePieceTracker[];

    readonly fouls: Fouls;
    readonly cards: Cards;
    readonly emergencyStopped: boolean;
    readonly borked: boolean;

    readonly rankingPoints: number;
    readonly pointsFromFouls: number;
    readonly bonusPoints: number;

    /** Creates a new Match */
    constructor(
        teamNumber: number, type: string, number: number, alliance: Alliance, trackers: GamePieceTracker[],
        data: Partial<MatchData>,
    ) {
        this.teamNumber = teamNumber;
        this.type = type;
        this.number = number;
        this.alliance = alliance;
        this.pieceTrackers = trackers;

        this.fouls = data.fouls || {regular: 0, technical: 0};
        this.cards = data.cards || {yellow: false, red: false};
        this.emergencyStopped = data.emergencyStopped || false;
        this.borked = data.borked || false;

        this.rankingPoints = data.rankingPoints || 0;
        this.pointsFromFouls = data.pointsFromFouls || 0;
        this.bonusPoints = data.bonusPoints || 0;
    }

    /** Gets the total number of points scored in a match */
    get points(): number {
        return this.pointsFromFouls + this.bonusPoints + this.pieceTrackers.reduce(
            (accumulator, tracker) => accumulator + tracker.totalPoints,
            0,
        );
    }
}
