/**
 * Generic storage tests.
 *
 * All storage backends to be used with the frc-scouting library must pass these tests.
 * If the rest of the code of the library depends on certain behavior from storage backends,
 * that behavior should be tested here.
 *
 * @author Annika
 */

import {makeMatch} from '../team.test';
import {Team} from '../team';
import type {StorageBackend} from './backend';

const backends: StorageBackend[] = [];

test.skip.each(backends)('team storage', (backend) => {
    expect(backend.getTeam(5940)).toEqual(null);

    const matchA = makeMatch(0);
    const matchB = makeMatch(42);

    const bread = new Team(5940, matchA, matchB);
    backend.saveTeam(bread);

    expect(backend.getTeam(5940)).toEqual(bread);
    // Storing a team should store all its matches
    expect(backend.getMatchByNumber(matchA.number)).toEqual(matchA);

    backend.deleteTeam(5940);
    expect(backend.getTeam(5940)).toEqual(null);
    expect(backend.getMatchByNumber(matchA.number)).toEqual(matchA);

    backend.saveTeam(bread);
    backend.deleteTeam(bread, true);
    expect(backend.getTeam(5940)).toEqual(null);
    expect(backend.getMatchByNumber(matchA.number)).toEqual(null);
});

test.skip.each(backends)('match storage', (backend) => {
    expect(backend.getMatchByNumber(10)).toEqual(null);
    expect(backend.getMatchByNumber(11)).toEqual(null);

    const matchA = makeMatch(0, 10);
    const matchB = makeMatch(10, 11);

    backend.saveMatch(matchA);
    backend.saveMatch(matchB);

    expect(backend.getMatchByNumber(matchA.number)).toEqual(matchA);
    expect(backend.getMatchByNumber(matchB.number)).toEqual(matchB);

    let matches = backend.getMatchesByTeam(matchA.teamNumber);
    expect(matches).toContainEqual(matchA);
    expect(matches).toContainEqual(matchB);

    // Deletion
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
