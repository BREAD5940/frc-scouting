/**
 * Code specific to the 2022 FRC game: Rapid React
 *
 * @author Annika
 */

// TODO: storage implementation (SQLite and possibly JSON) and point/RP calculation

import {Alliance, Match, MatchData} from '..';

/** Tracks the highest RUNG the robot reached */
enum MonkeyBarState {
    /** No attempt was made to climb */
    DidNotAttempt = 0,
    /** An attempt was made to climb, but no RUNG was successfully reached */
    None = 1,
    Low = 2,
    Mid = 3,
    High = 4,
    Traversal = 5,
}

interface Shots {
    high: {made: number, missed: number};
    low: {made: number, missed: number};
}

// TODO: should this/monkey bars be GamePieceTrackers?
/** Tracks the robot's shots */
interface ShotTracker {
    auto: Shots;
    teleop: Shots;
}

interface RapidReactMatchData extends Partial<MatchData> {
    shots: ShotTracker;
    climbing: MonkeyBarState;
}

/** Represents one robot's performance in a match of Rapid React */
export class RapidReactMatch extends Match {
    shots: ShotTracker;
    climbing: MonkeyBarState;

    /** creates a match */
    constructor(
        teamNumber: number, type: string, number: number, alliance: Alliance, data: RapidReactMatchData,
    ) {
        super(teamNumber, type, number, alliance, [], data);
        this.shots = data.shots;
        this.climbing = data.climbing;
    }
}


