/**
 * A JSON storage backend.
 *
 * @author Annika
 */

import * as fs from 'fs';
import {resolve as resolvePath} from 'path';
import {Match} from '../match';
import {Team} from '../team';
import {StorageBackend} from './backend';

/** A template match to be hackily overloaded with JSON data */
class MatchTemplate extends Match {};

/**
 * The JSON storage backend.
 *
 * The directory structure is as follows:
 * <root>/
 *  |-------- matches/
 *  |          |------- match${number}-team${number}.json
 *  |          |------- match${number}.json
 *  |-------- teams/
 *  |          |------- team${number}.json
 *  |
 */
export class JSONBackend implements StorageBackend {
    storageDir: string;

    /** constructor */
    constructor(path: string) {
        this.storageDir = resolvePath(path);

        fs.mkdirSync(resolvePath(this.storageDir, 'matches/'), {recursive: true});
        fs.mkdirSync(resolvePath(this.storageDir, 'teams/'), {recursive: true});
    }

    /** saves a team */
    saveTeam(team: Team<Match>) {
        const path = resolvePath(this.storageDir, `teams/team${team.number}.json`);
        fs.writeFileSync(path, JSON.stringify({
            number: team.number,
            matches: team.matches.map((match) => match.number),
        }));
        for (const match of team.matches) {
            this.saveMatchInner(match, team.number);
        }
    }

    /** saves a match */
    saveMatch(match: Match) {
        this.saveMatchInner(match);
    }

    /** gets a team */
    getTeam(number: number) {
        const target = `team${number}.json`;
        const path = resolvePath(this.storageDir, 'teams/');
        for (const file of fs.readdirSync(path)) {
            if (file === target) {
                const data = JSON.parse(fs.readFileSync(resolvePath(path, file)).toString());
                return new Team<Match>(data.number, ...data.matches.map((num: number) => this.getMatchByNumber(num)));
            }
        }
        return null;
    }

    /** gets a match */
    getMatchByNumber(number: number) {
        const prefix = `match${number}`;
        const path = resolvePath(this.storageDir, 'matches/');
        for (const file of fs.readdirSync(path)) {
            if (file.startsWith(prefix)) return this.pathToMatch(resolvePath(path, file));
        }
        return null;
    }

    /** gets matches by team  */
    getMatchesByTeam(team: Team<any> | number) {
        const number = typeof team === 'number' ? team : team.number;
        const matches: Match[] = [];

        const suffix = `-team${number}.json`;
        const path = resolvePath(this.storageDir, 'matches/');

        for (const file of fs.readdirSync(path)) {
            if (file.endsWith(suffix)) matches.push(this.pathToMatch(resolvePath(path, file)));
        }

        return matches;
    }

    /** converts a path to a match */
    private pathToMatch(path: string) {
        const data = JSON.parse(fs.readFileSync(path).toString());
        // TODO: figure out a less hacky way to do this
        const match = new MatchTemplate(data.teamNumber, data.type, data.number, data.alliance, [], {});
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                // @ts-ignore
                match[key] = data[key];
            }
        }
        return match;
    }

    /** saves a match, with optional associated team number */
    private saveMatchInner(match: Match, associatedTeamNumber?: number) {
        const path = resolvePath(
            this.storageDir,
            `matches/match${match.number}${associatedTeamNumber ? `-team${associatedTeamNumber}` : ``}`,
        );
        fs.writeFileSync(path, JSON.stringify(match));
    }
}
