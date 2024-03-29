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
    /** Returns the total number of ranking points scored by the game piece */
    abstract get rankingPoints(): number;
}


// TODO: add more categories for failure
export interface MatchData {
    fouls: Fouls;
    cards: Cards;
    emergencyStopped: boolean;
    borked: boolean;

    nonPieceTrackerRankingPoints: number;
    pointsFromFouls: number;
    bonusPoints: number;
    crossedStartLineInAuto: boolean;

    comments: string,
    defended: boolean,
    noShow: boolean,
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

    readonly nonPieceTrackerRankingPoints: number;
    readonly pointsFromFouls: number;
    readonly bonusPoints: number;
    readonly crossedStartLineInAuto: boolean;

    readonly comments: string;
    readonly defended: boolean;
    readonly noShow: boolean;

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

        this.nonPieceTrackerRankingPoints = data.nonPieceTrackerRankingPoints || 0;
        this.pointsFromFouls = data.pointsFromFouls || 0;
        this.bonusPoints = data.bonusPoints || 0;
        this.crossedStartLineInAuto = data.crossedStartLineInAuto || false;

        this.comments = data.comments || '';
        this.defended = data.defended || false;
        this.noShow = data.noShow || false;
    }

    /** Gets the total number of points scored in a match */
    get points(): number {
        return (
            this.pointsFromFouls +
            this.bonusPoints +
            (this.crossedStartLineInAuto ? 5 : 0) +
            this.pieceTrackers.reduce((accumulator, tracker) => accumulator + tracker.totalPoints, 0)
        );
    }

    /** Gets ranking points */
    get rankingPoints(): number {
        return this.nonPieceTrackerRankingPoints + this.pieceTrackers.reduce(
            (accumulator, tracker) => accumulator + tracker.rankingPoints, 0,
        );
    }
}
