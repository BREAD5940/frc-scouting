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

/**
 * Represents an FRC match. Is extended by each FRC game.
 */
export abstract class Match {
    teamNumber: number;
    /* TODO: add more expressive type (I have no clue wtf a match type can be) */
    type: string;
    number: number;
    alliance: Alliance;

    pieceTrackers: GamePieceTracker[];

    fouls: Fouls = {regular: 0, technical: 0};
    cards: Cards = {yellow: false, red: false};
    emergencyStopped = false;
    borked = false;

    rankingPoints = 0;
    pointsFromFouls = 0;

    /** Creates a new Match */
    constructor(teamNumber: number, type: string, number: number, alliance: Alliance, trackers: GamePieceTracker[]) {
        this.teamNumber = teamNumber;
        this.type = type;
        this.number = number;
        this.alliance = alliance;
        this.pieceTrackers = trackers;
    }

    /** Gets the total number of points scored in a match */
    get points(): number {
        return this.pointsFromFouls + this.pieceTrackers.reduce(
            (accumulator, tracker) => accumulator + tracker.totalPoints,
            0,
        );
    }
}
