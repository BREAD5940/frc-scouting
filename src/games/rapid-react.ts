/**
 * Code specific to the 2022 FRC game: Rapid React
 *
 * @author Annika
 */

// TODO: storage implementation (SQLite and possibly JSON) and point/RP calculation

import {Alliance, GamePieceTracker, Match, MatchData} from '..';

/** Tracks the highest RUNG the robot reached */
export enum MonkeyBarState {
    /** No attempt was made to climb */
    DidNotAttempt = 0,
    /** An attempt was made to climb, but no RUNG was successfully reached */
    None = 1,
    Low = 2,
    Mid = 3,
    High = 4,
    Traversal = 5,
}

/** Tracks a robot's climb status */
export class MonkeyBarTracker implements GamePieceTracker {
    state: MonkeyBarState;

    /** Creates a MonkeyBarTracker */
    constructor(state: MonkeyBarState) {
        this.state = state;
    }

    /** Gets the total number of points scored from climbing for this robot */
    get totalPoints(): number {
        switch (this.state) {
        case MonkeyBarState.None: case MonkeyBarState.DidNotAttempt:
            return 0;
        case MonkeyBarState.Low:
            return 4;
        case MonkeyBarState.Mid:
            return 6;
        case MonkeyBarState.High:
            return 10;
        case MonkeyBarState.Traversal:
            return 15;
        default:
            throw new Error(`Unexpected value for MonkeyBarState: ${this.state}`);
        }
    }

    /** RP getter */
    get rankingPoints(): number {
        return 0;
    }
}

export interface Shots {
    high: {made: number, missed: number};
    low: {made: number, missed: number};
}

/** Tracks the robot's shots */
class ShotTracker implements GamePieceTracker {
    auto: Shots;
    teleop: Shots;

    /** Creates a ShotTracker */
    constructor(auto: Shots, teleop: Shots) {
        this.auto = auto;
        this.teleop = teleop;
    }

    /** Gets the total number of points scored via cargo */
    get totalPoints(): number {
        return (
            this.auto.high.made * 4 +
            this.auto.low.made * 2 +
            this.teleop.high.made * 2 +
            this.teleop.low.made
        );
    }

    /** Gets the total number shots made */
    get totalShotsMade(): number {
        return (
            this.auto.high.made +
            this.auto.low.made +
            this.teleop.high.made +
            this.teleop.low.made
        );
    }

    /** ranking point getters */
    get rankingPoints(): number {
        // Ranking points are calculated on a per-alliance basis in RR.
        return 0;
    }
}

interface RapidReactMatchData extends Partial<MatchData> {
    autoShots: Shots;
    teleopShots: Shots;
    climbing: MonkeyBarState;
}

/** Represents one robot's performance in a match of Rapid React */
export class RapidReactMatch extends Match {
    pieceTrackers: [ShotTracker, MonkeyBarTracker];

    /** creates a match */
    constructor(
        teamNumber: number, type: string, number: number, alliance: Alliance, data: RapidReactMatchData,
    ) {
        super(teamNumber, type, number, alliance, [], data);
        this.pieceTrackers = [
            new ShotTracker(data.autoShots, data.teleopShots),
            new MonkeyBarTracker(data.climbing),
        ];
    }
}

/**
 * Since Rapid React's ranking points are based on the alliance's performance,
 * rather than any individual robot, this function calculates an *alliance's* ranking points.
 *
 * `teams` should be an array of matches: one for each robot on the alliance in the given match
 */
export function allianceRapidReactRP(teams: RapidReactMatch[]) {
    let rankingPoints = 0;

    let totalCargo = 0;
    let totalClimbPoints = 0;
    let totalAutoCargo = 0;
    for (const team of teams) {
        totalCargo += team.pieceTrackers[0].totalShotsMade;
        totalAutoCargo += team.pieceTrackers[0].auto.low.made + team.pieceTrackers[0].auto.high.made;
        totalClimbPoints += team.pieceTrackers[1].totalPoints;
    }
    const quintet = totalAutoCargo >= 5;

    // Cargo shots RP
    if (totalCargo >= (quintet ? 18 : 20)) rankingPoints++;

    // Climbing RP
    if (totalClimbPoints >= 16) rankingPoints++;

    return rankingPoints;
}
