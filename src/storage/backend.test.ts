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

import type {StorageBackend} from './backend';
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

let curMatchNum = 0;

/** generates a Deep Space match for testing */
function makeDSMatch(points: number, number?: number) {
    const match = new DeepSpaceMatch(
        5940, 'test', number || curMatchNum++, 'BLUE', {bonusPoints: points, initialHABLevel: 1},
    );
    return match;
}

/** generates an Infinite Recharge match for testing */
function makeIRMatch(points: number, number?: number) {
    const match = new InfiniteRechargeMatch(
        5940, 'test', number || curMatchNum++, 'BLUE', {bonusPoints: points},
    );
    return match;
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

const matchGenerators = [makeDSMatch, makeIRMatch];

const sql = new SQLBackend();
sql.registerPlan(new DeepSpaceSQL(':memory:'));
sql.registerPlan(new InfiniteRechargeSQL(':memory:'));

const backends: StorageBackend[] = [sql];

if (platform() !== 'win32') {
    beforeAll(async () => {
        // Recursively removing directories doesn't work correctly on Windows
        // Ask Annika about her experiences with this! She hates Node's odd behavior.
        const path = `${__dirname}/test`;
        await deleteDirectory(path);
        backends.push(new JSONBackend(path, new InfiniteRechargeJSON(), new DeepSpaceJSON()));
    });
}

describe.each(backends)('%s', (backend) => {
    it.each(matchGenerators)('should store teams', (makeMatch) => {
        expect(backend.getTeam(5940)).toEqual(null);

        const matchA = makeMatch(0);
        const matchB = makeMatch(42);

        const bread = new Team(5940, matchA, matchB);
        backend.saveTeam(bread);

        expect(backend.getTeam(5940)).toEqual(bread);
        // Storing a team should store all its matches
        expect(backend.getMatchesByNumber(matchA.number)).toEqual([matchA]);
        expect(backend.getMatchesByNumber(matchB.number)).toEqual([matchB]);

        expect(backend.getMatchesByTeam(5940)).toContainEqual(matchA);
        expect(backend.getMatchesByTeam(5940)).toContainEqual(matchB);

        // numbers and Team objects both need to work
        expect(backend.getMatchesByTeam(5940)).toEqual(backend.getMatchesByTeam(bread));

        backend.deleteTeam(5940);
        expect(backend.getTeam(5940)).toEqual(null);
        expect(backend.getMatchesByNumber(matchA.number)).toEqual([matchA]);

        backend.saveTeam(bread);
        backend.deleteTeam(bread, true);
        expect(backend.getTeam(5940)).toEqual(null);
        expect(backend.getMatchesByNumber(matchA.number)).toEqual([]);
    });

    it.each(matchGenerators)('should store matches', (makeMatch) => {
        expect(backend.getMatchesByNumber(10)).toEqual([]);
        expect(backend.getMatchesByNumber(11)).toEqual([]);

        const matchA = makeMatch(0, 10);
        const matchB = makeMatch(10, 11);

        backend.saveMatch(matchA);
        backend.saveMatch(matchB);

        expect(backend.getMatchesByNumber(matchA.number)).toEqual([matchA]);
        expect(backend.getMatchesByNumber(matchB.number)).toEqual([matchB]);

        // Matches should only be fetched here if they're associated with a team
        // This is weird behavior - see src/storage/backend.ts:17
        let matches = backend.getMatchesByTeam(matchA.teamNumber);
        expect(matches).not.toContainEqual(matchA);
        expect(matches).not.toContainEqual(matchB);

        // Deletion
        // Deleting a match only deletes matches associated with a team
        // not all matches scouted for the team. We can change this if desired
        // see see src/storage/backend.ts:17
        const team = new Team(matchA.teamNumber, matchA, matchB);
        backend.saveTeam(team);
        backend.deleteMatchesByTeam(matchA.teamNumber);

        matches = backend.getMatchesByTeam(matchA.teamNumber);
        expect(matches).not.toContainEqual(matchA);
        expect(matches).not.toContainEqual(matchB);
        expect(backend.getMatchesByNumber(matchA.number)).toEqual([]);
        expect(backend.getMatchesByNumber(matchB.number)).toEqual([]);

        backend.saveMatch(matchA);
        expect(backend.getMatchesByNumber(matchA.number)).toEqual([matchA]);
        expect(backend.getMatchesByNumber(matchB.number)).toEqual([]);

        backend.deleteMatchByNumber(matchA.number);
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

    it('should support storing multiple Match objects with the same match number', () => {
        expect(backend.getMatchesByNumber(17)).toEqual([]);

        const matchOnePoint = makeIRMatch(1, 17);
        const matchTwentyPoints = makeIRMatch(20, 17);

        backend.saveMatch(matchOnePoint);
        backend.saveMatch(matchTwentyPoints);

        expect(backend.getMatchesByNumber(17)).toEqual([matchOnePoint, matchTwentyPoints]);
    });
});
