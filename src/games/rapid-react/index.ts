/**
 * Code specific to the 2022 FRC game: Rapid React
 *
 * @author Annika
 */

// TODO: storage implementation (SQLite and possibly JSON) and point/RP calculation

import {Alliance, GamePieceTracker, Match, MatchData, Team} from '../..';
import {SQLStoragePlan} from '../../storage/sqlite';
import * as fs from 'fs';

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

/**
 * Stores data about Rapid React matches in a SQLite database.
 */
export class RapidReactSQL extends SQLStoragePlan<RapidReactMatch> {
    /** constructs the storage plan */
    constructor(absolutePath: string) {
        super(absolutePath);
        const schema = fs.readFileSync(`${__dirname}/schema.sql`).toString();
        this.database.exec(schema);
    }

    /**
     * @returns `true` if this storage plan can store the given `match`, and `false` otherwise.
     */
    applies(match: Match): boolean {
        return match instanceof RapidReactMatch;
    }

    /**
     * Converts raw data from the SQLite database into a Match object.
     */
    dbDataToMatch(data: any): RapidReactMatch {
        return new RapidReactMatch(
            data.team_number,
            data.type, data.match_number,
            data.alliance === 0 ? 'BLUE' : 'RED', {
                fouls: {regular: data.fouls, technical: data.tech_fouls},
                cards: {yellow: Boolean(data.yellow_card), red: Boolean(data.red_cards)},
                emergencyStopped: Boolean(data.disabled),

                bonusPoints: data.bonus_points,
                crossedStartLineInAuto: Boolean(data.crossed_start_line_in_auto),

                autoShots: {
                    high: {made: data.shots_made_highgoal_auto, missed: data.shots_missed_highgoal_auto},
                    low: {made: data.shots_made_lowgoal_auto, missed: data.shots_missed_lowgoal_auto},
                },
                teleopShots: {
                    high: {made: data.shots_made_highgoal_teleop, missed: data.shots_missed_highgoal_teleop},
                    low: {made: data.shots_made_lowgoal_teleop, missed: data.shots_missed_lowgoal_teleop},
                },
                climbing: data.monkey_bar_state as MonkeyBarState,
            },
        );
    }

    /**
     * Stores the given match into the SQLite database.
     */
    insertMatch(match: RapidReactMatch): void {
        const insertion = this.getStatement(
            `INSERT INTO matches (` +
                `team_number, type, match_number, alliance, ` +
                `shots_made_highgoal_auto, shots_made_highgoal_teleop, ` +
                `shots_made_lowgoal_auto, shots_made_lowgoal_teleop, ` +
                `shots_missed_highgoal_auto, shots_missed_highgoal_teleop, ` +
                `shots_missed_lowgoal_auto, shots_missed_lowgoal_teleop, ` +
                `monkey_bar_state, crossed_start_line_in_auto, ` +
                `tech_fouls, fouls, yellow_card, red_card, estopped, borked, ` +
                `foul_points, bonus_points` +
            `) VALUES (` +
                `$teamNumber, $type, $number, $alliance, ` +
                `$shotsMadeHighAuto, $shotsMadeHighTeleop, ` +
                `$shotsMadeLowAuto, $shotsMadeLowTeleop, ` +
                `$shotsMissedHighAuto, $shotsMissedHighTeleop, ` +
                `$shotsMissedLowAuto, $shotsMissedLowTeleop, ` +
                `$climbing, $crossedStartInAuto, ` +
                `$techFouls, $fouls, $yellowCard, $redCard, $disabled, $borked, ` +
                `$foulPoints, $bonusPoints` +
            `)`,
        );

        insertion.run({
            teamNumber: match.teamNumber,
            type: match.type,
            number: match.number,
            alliance: match.alliance === 'BLUE' ? 0 : 1,

            shotsMadeHighAuto: match.pieceTrackers[0].auto.high.made,
            shotsMadeHighTeleop: match.pieceTrackers[0].teleop.high.made,
            shotsMadeLowAuto: match.pieceTrackers[0].auto.low.made,
            shotsMadeLowTeleop: match.pieceTrackers[0].teleop.low.made,

            shotsMissedHighAuto: match.pieceTrackers[0].auto.high.missed,
            shotsMissedHighTeleop: match.pieceTrackers[0].teleop.high.missed,
            shotsMissedLowAuto: match.pieceTrackers[0].auto.low.missed,
            shotsMissedLowTeleop: match.pieceTrackers[0].teleop.low.missed,

            climbing: match.pieceTrackers[1].state,
            crossedStartInAuto: Number(match.crossedStartLineInAuto),

            techFouls: match.fouls.technical,
            fouls: match.fouls.regular,
            yellowCard: Number(match.cards.yellow),
            redCard: Number(match.cards.red),
            disabled: Number(match.emergencyStopped),
            borked: Number(match.borked),

            foulPoints: match.pointsFromFouls,
            bonusPoints: match.bonusPoints,
        });
    }
}
