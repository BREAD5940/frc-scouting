/**
 * Generic storage tests.
 *
 * All storage backends to be used with the frc-scouting library must pass these tests.
 * If the rest of the code of the library depends on certain behavior from storage backends,
 * that behavior should be tested here.
 *
 * @author Annika
 */

import {platform} from 'os';
import * as fs from 'fs';

import type {StorageBackend, StorageHooks} from './backend';
import {Team} from '../team';
import {SQLBackend} from './sqlite';
import {CargoTracker, DeepSpaceJSON, DeepSpaceMatch, DeepSpaceSQL, HatchPanelTracker} from '../games/deep-space';
import {JSONBackend} from './json';
import {
    ColorWheel, PowerCellTracker, ShieldGenerator,
    InfiniteRechargeMatch,
    InfiniteRechargeSQL,
    InfiniteRechargeJSON,
} from '../games/infinite-recharge';
import {MonkeyBarState, RapidReactMatch, RapidReactSQL} from '../games/rapid-react';

// Matches <50 are reserved for individual tests
let curMatchNum = 50;

/** generates a Deep Space match for testing */
function makeDSMatch(points: number, number?: number, team?: number) {
    const match = new DeepSpaceMatch(
        team || 5940, 'test', number || curMatchNum++, 'BLUE', {
            bonusPoints: points,
            initialHABLevel: 1,
            comments: 'foobar',
            defended: false,
            noShow: true,
        },
    );
    return match;
}

/** generates an Infinite Recharge match for testing */
function makeIRMatch(points: number, number?: number, team?: number) {
    const match = new InfiniteRechargeMatch(
        team || 5940, 'test', number || curMatchNum++, 'BLUE', {bonusPoints: points, comments: "I'm an IR match!", defended: true, noShow: false},
    );
    return match;
}

/** generates a Rapid React match for testing */
function makeRRMatch(points: number, number?: number, team?: number) {
    return new RapidReactMatch(team || 5940, 'test', number || curMatchNum++, 'BLUE', {
        autoShots: {high: {made: 2, missed: 0}, low: {made: 2, missed: 0}},
        teleopShots: {high: {made: 2, missed: 0}, low: {made: 2, missed: 0}},
        climbing: MonkeyBarState.Mid,
        defended: true,
        comments: "ooo, defense!",
        noShow: true,
    });
}

/** recursively removes a directory */
async function deleteDirectory(path: string) {
    await new Promise<void>((resolve, reject) => {
        fs.rmdir(path, {recursive: true}, (err: NodeJS.ErrnoException | null) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

const matchGenerators = [
    {generator: makeDSMatch, game: 'Deep Space'},
    {generator: makeIRMatch, game: 'Infinite Recharge'},
    {generator: makeRRMatch, game: 'Rapid React'},
];

const hooks: StorageHooks = {
    onSaveMatch: jest.fn(),
    onDeleteMatch: jest.fn(),
    onGetMatch: jest.fn(),
};

const sql = new SQLBackend(hooks);
sql.registerPlan(new DeepSpaceSQL(':memory:'));
sql.registerPlan(new InfiniteRechargeSQL(':memory:'));
sql.registerPlan(new RapidReactSQL(':memory:'));

const backends: StorageBackend[] = [sql];

if (platform() !== 'win32') {
    beforeAll(async () => {
        // Recursively removing directories doesn't work correctly on Windows
        // Ask Annika about her experiences with this! She hates Node's odd behavior.
        const path = `${__dirname}/test`;
        try {
            await deleteDirectory(path);
        } catch (e) {
            // ignore (directory probably doesn't exist)
        }
        backends.push(new JSONBackend(path, {}, new InfiniteRechargeJSON(), new DeepSpaceJSON()));
    });
}

describe.each(backends)('%s', (backend) => {
    beforeEach(() => jest.clearAllMocks());

    it.each(matchGenerators)('should store $game teams', ({generator}) => {
        expect(backend.getTeam(5940)).toEqual(null);

        const matchA = generator(0);
        const matchB = generator(42);

        const bread = new Team(5940, matchA, matchB);
        expect(hooks.onSaveMatch).not.toBeCalled();
        backend.saveTeam(bread);
        expect(hooks.onSaveMatch).toBeCalledTimes(2);

        expect(backend.getTeam(5940)).toEqual(bread);
        // Storing a team should store all its matches
        expect(hooks.onGetMatch).not.toBeCalled();
        expect(backend.getMatchesByNumber(matchA.number)).toEqual([matchA]);
        expect(hooks.onGetMatch).toBeCalledTimes(1);
        expect(backend.getMatchesByNumber(matchB.number)).toEqual([matchB]);
        expect(hooks.onGetMatch).toBeCalledTimes(2);

        expect(backend.getMatchesByTeam(5940)).toContainEqual(matchA);
        expect(backend.getMatchesByTeam(5940)).toContainEqual(matchB);

        // numbers and Team objects both need to work
        expect(backend.getMatchesByTeam(5940)).toEqual(backend.getMatchesByTeam(bread));

        backend.deleteTeam(matchA.number);
        expect(hooks.onDeleteMatch).not.toBeCalled();

        expect(backend.getTeam(matchA.number)).toEqual(null);
        expect(backend.getMatchesByNumber(matchA.number)).toEqual([matchA]);

        backend.saveTeam(bread);
        backend.deleteTeam(bread, true);
        expect(backend.getTeam(matchA.number)).toEqual(null);
        expect(backend.getMatchesByNumber(matchA.number)).toEqual([]);
    });

    it.each(matchGenerators)('should store $game matches', ({generator}) => {
        const matchANumber = curMatchNum++;
        const matchBNumber = curMatchNum++;

        expect(hooks.onGetMatch).not.toBeCalled();
        expect(backend.getMatchesByNumber(matchANumber)).toEqual([]);
        expect(backend.getMatchesByNumber(matchBNumber)).toEqual([]);
        expect(hooks.onGetMatch).not.toBeCalled();

        const matchA = generator(0, matchANumber, 1);
        const matchB = generator(10, matchBNumber, 2);

        expect(hooks.onSaveMatch).not.toBeCalled();
        backend.saveMatch(matchA);
        expect(hooks.onSaveMatch).toBeCalledTimes(1);
        backend.saveMatch(matchB);
        expect(hooks.onSaveMatch).toBeCalledTimes(2);

        expect(hooks.onGetMatch).not.toBeCalled();

        expect(backend.getMatchesByNumber(matchA.number)).toEqual([matchA]);
        expect(hooks.onGetMatch).toBeCalledTimes(1);

        expect(backend.getMatchesByNumber(matchB.number)).toEqual([matchB]);
        expect(hooks.onGetMatch).toBeCalledTimes(2);

        let matches = backend.getMatchesByTeam(matchA.teamNumber);
        expect(matches).toContainEqual(matchA);
        expect(matches).not.toContainEqual(matchB);

        // Deletion
        const team = new Team(matchA.teamNumber, matchA, matchB);
        backend.saveTeam(team);
        backend.deleteMatchesByTeam(matchA.teamNumber);

        matches = backend.getMatchesByTeam(matchA.teamNumber);
        expect(matches).not.toContainEqual(matchA);
        expect(backend.getMatchesByNumber(matchA.number)).toEqual([]);
        expect(backend.getMatchesByNumber(matchB.number)).toContainEqual(matchB);

        backend.saveMatch(matchA);
        expect(backend.getMatchesByNumber(matchA.number)).toEqual([matchA]);
        expect(backend.getMatchesByNumber(matchB.number)).toContainEqual(matchB);

        expect(hooks.onDeleteMatch).not.toBeCalled();
        backend.deleteMatchByNumber(matchA.number);
        expect(hooks.onDeleteMatch).toBeCalledTimes(1);

        expect(backend.getMatchesByNumber(matchA.number)).toEqual([]);
        expect(backend.getMatchesByTeam(matchA.teamNumber)).not.toContainEqual(matchA);
    });

    // Tests for game-specific stuff
    it('should properly store Deep Space matches', () => {
        expect(backend.getMatchesByNumber(15)).toEqual([]);

        const match = new DeepSpaceMatch(5940, 'test', 15, 'RED', {
            helpsOthersHABClimb: true,
            initialHABLevel: 2,
            finalHABLevel: 3,
            crossesStartLine: true,
            cargo: new CargoTracker({
                DROPPED: {teleop: 2, auto: 1},
                ROCKET: {teleop: 1, auto: 2},
                SHIP: {auto: 3, teleop: 0},
            }),
            hatches: new HatchPanelTracker({
                DROPPED: {teleop: 3, auto: 0},
                ROCKET: {teleop: 5, auto: 32},
                SHIP: {auto: 2, teleop: 1},
            }),
            rankingPointRecord: {ROCKET: true, HAB: true},
            bonusPoints: 15,
            rocketsAssembled: {LEFT: true, RIGHT: false},
        });

        backend.saveMatch(match);

        const loaded = backend.getMatchesByNumber(match.number).pop();

        expect(loaded instanceof DeepSpaceMatch).toEqual(match instanceof DeepSpaceMatch);

        expect(loaded).toEqual(match);
        expect(loaded?.points).toEqual(match.points);
    });

    it('should properly store Infinite Recharge matches', () => {
        expect(backend.getMatchesByNumber(16)).toEqual([]);

        const match = new InfiniteRechargeMatch(5940, 'test', 16, 'RED', {
            colorWheel: new ColorWheel('ROTATED_X_TIMES'),
            powerCells: new PowerCellTracker({
                LOW: {auto: 3, teleop: 1},
                INNER: {auto: 2, teleop: 1},
                OUTER: {auto: 1, teleop: 2},
            }, true),
            shieldGenerator: new ShieldGenerator(1, 2, true),
        });

        backend.saveMatch(match);

        const loaded = backend.getMatchesByNumber(match.number).pop();

        expect(loaded instanceof InfiniteRechargeMatch).toEqual(match instanceof InfiniteRechargeMatch);
        expect(loaded).toEqual(match);
        expect(loaded?.points).toEqual(match.points);
    });

    it('should properly store Rapid React monkey bar state', () => {
        for (const climbing of [
            MonkeyBarState.DidNotAttempt,
            MonkeyBarState.None,
            MonkeyBarState.Low,
            MonkeyBarState.Mid,
            MonkeyBarState.High,
            MonkeyBarState.Traversal,
        ]) {
            const matchNumber = curMatchNum++;
            expect(backend.getMatchesByNumber(matchNumber)).toEqual([]);
            const match = new RapidReactMatch(5940, 'test', matchNumber, 'RED', {
                autoShots: {high: {made: 10, missed: 2}, low: {made: 5, missed: 3}},
                teleopShots: {high: {made: 4, missed: 8}, low: {made: 3, missed: 9}},
                climbing,
                crossedStartLineInAuto: true,
            });

            backend.saveMatch(match);

            const loaded = backend.getMatchesByNumber(matchNumber).pop();
            expect(loaded instanceof RapidReactMatch).toEqual(match instanceof RapidReactMatch);
            expect(loaded).toEqual(match);
            expect(loaded?.points).toEqual(match.points);
        }
    });


    it('should support storing multiple Match objects with the same match number', () => {
        expect(backend.getMatchesByNumber(17)).toEqual([]);

        const matchOnePoint = makeIRMatch(1, 17);
        const matchTwentyPoints = makeIRMatch(20, 17);

        backend.saveMatch(matchOnePoint);
        backend.saveMatch(matchTwentyPoints);

        expect(backend.getMatchesByNumber(17)).toEqual([matchOnePoint, matchTwentyPoints]);
    });
});
