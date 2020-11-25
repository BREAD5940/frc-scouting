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
import {rmSync} from 'fs';

import type {StorageBackend} from './backend';
import {Team} from '../team';
import {SQLBackend} from './sqlite';
import {DeepSpaceMatch, DeepSpaceSQL} from '../games/deep-space';
import {JSONBackend} from './json';

let curMatchNum = 0;

/** generates a match for testing */
function makeDSMatch(points: number, number?: number) {
    const match = new DeepSpaceMatch(
        5940, 'test', number || curMatchNum++, 'BLUE', {bonusPoints: points, initialHABLevel: 1},
    );
    return match;
}

const backends: StorageBackend[] = [
    new SQLBackend(new DeepSpaceSQL(':memory:')),
];

if (platform() !== 'win32') {
    // Recursively removing directories doesn't work correctly on Windows
    // Ask Annika about her experiences with this! She hates Node's odd behavior.
    const path = `${__dirname}/test/`;
    rmSync(path, {recursive: true, force: true});
    backends.push(new JSONBackend(path));
}

test.each(backends)('team storage', (backend) => {
    expect(backend.getTeam(5940)).toEqual(null);

    const matchA = makeDSMatch(0);
    const matchB = makeDSMatch(42);

    const bread = new Team(5940, matchA, matchB);
    backend.saveTeam(bread);

    expect(backend.getTeam(5940)).toEqual(bread);
    // Storing a team should store all its matches
    expect(backend.getMatchByNumber(matchA.number)).toEqual(matchA);
    expect(backend.getMatchByNumber(matchB.number)).toEqual(matchB);

    expect(backend.getMatchesByTeam(5940)).toContainEqual(matchA);
    expect(backend.getMatchesByTeam(5940)).toContainEqual(matchB);

    backend.deleteTeam(5940);
    expect(backend.getTeam(5940)).toEqual(null);
    expect(backend.getMatchByNumber(matchA.number)).toEqual(matchA);

    backend.saveTeam(bread);
    backend.deleteTeam(bread, true);
    expect(backend.getTeam(5940)).toEqual(null);
    expect(backend.getMatchByNumber(matchA.number)).toEqual(null);
});

test.each(backends)('match storage', (backend) => {
    expect(backend.getMatchByNumber(10)).toEqual(null);
    expect(backend.getMatchByNumber(11)).toEqual(null);

    const matchA = makeDSMatch(0, 10);
    const matchB = makeDSMatch(10, 11);

    backend.saveMatch(matchA);
    backend.saveMatch(matchB);

    expect(backend.getMatchByNumber(matchA.number)).toEqual(matchA);
    expect(backend.getMatchByNumber(matchB.number)).toEqual(matchB);

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
    expect(backend.getMatchByNumber(matchA.number)).toEqual(null);
    expect(backend.getMatchByNumber(matchB.number)).toEqual(null);

    backend.saveMatch(matchA);
    expect(backend.getMatchByNumber(matchA.number)).toEqual(matchA);
    expect(backend.getMatchByNumber(matchB.number)).toEqual(null);

    backend.deleteMatchByNumber(matchA.number);
    expect(backend.getMatchByNumber(matchA.number)).toEqual(null);
    expect(backend.getMatchesByTeam(matchA.teamNumber)).not.toContainEqual(matchA);
});
