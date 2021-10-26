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


/**
 * Plans out how to store a match of a given game as JSON.
 */
export interface JSONStoragePlan<T extends Match> {
    applies(data: any): boolean;
    dataToMatch(data: any): T;
}

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
    plans: JSONStoragePlan<Match>[];

    /** constructor */
    constructor(path: string, ...plans: JSONStoragePlan<Match>[]) {
        this.storageDir = resolvePath(path);
        this.plans = plans;

        fs.mkdirSync(resolvePath(this.storageDir, 'matches/'), {recursive: true});
        fs.mkdirSync(resolvePath(this.storageDir, 'teams/'), {recursive: true});
    }

    /** register a plan */
    registerPlan(plan: JSONStoragePlan<Match>) {
        this.plans.push(plan);
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
                return new Team<Match>(data.number, ...data.matches.map((num: number) => this.getMatchesByNumber(num)));
            }
        }
        return null;
    }

    /** gets matches */
    getMatchesByNumber(number: number) {
        const prefix = `match${number}`;
        const path = resolvePath(this.storageDir, 'matches/');
        const matches: Match[] = [];
        for (const file of fs.readdirSync(path)) {
            if (file.startsWith(prefix)) matches.push(this.pathToMatch(resolvePath(path, file)));
        }
        return matches;
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

    /** deletes a team */
    deleteTeam(team: Team<any> | number, deleteMatches?: boolean) {
        const number = typeof team === 'number' ? team : team.number;
        fs.unlinkSync(resolvePath(this.storageDir, `teams`, `team${number}.json`));
        if (deleteMatches) this.deleteMatchesByTeam(team);
    }

    /** deletes a match by number */
    deleteMatchByNumber(number: number) {
        const path = resolvePath(this.storageDir, 'matches');
        for (const possibleMatch of fs.readdirSync(path)) {
            if (possibleMatch.startsWith(`match${number}`)) fs.unlinkSync(resolvePath(path, possibleMatch));
        }
    }

    /** deletes all matches associated with a given team */
    deleteMatchesByTeam(team: Team<any> | number) {
        const number = typeof team === 'number' ? team : team.number;
        const path = resolvePath(this.storageDir, 'matches');
        for (const possibleMatch of fs.readdirSync(path)) {
            if (possibleMatch.endsWith(`-team${number}.json`)) fs.unlinkSync(resolvePath(path, possibleMatch));
        }
    }

    /** converts a path to a match */
    private pathToMatch(path: string) {
        const data = JSON.parse(fs.readFileSync(path).toString());

        const plan = this.plans.find((plan) => plan.applies(data));
        if (!plan) throw new Error(`No JSON storage plan found to handle the path ${path}.`);

        return plan.dataToMatch(data);
    }

    /** saves a match, with optional associated team number */
    private saveMatchInner(match: Match, associatedTeamNumber?: number) {
        if (associatedTeamNumber) {
            // Remove non-associated
            try {
                fs.unlinkSync(resolvePath(this.storageDir, 'matches', `match${match.number}.json`));
            } catch (err: any) {
                if (err.code !== 'ENOENT') throw err;
            }
        }

        const data = JSON.stringify(match);
        if (!this.plans.some((plan) => plan.applies(match))) {
            throw new Error(`No JSON storage plan found to handle ${data}`);
        }

        const path = resolvePath(
            this.storageDir,
            `matches`,
            `match${match.number}${associatedTeamNumber ? `-team${associatedTeamNumber}` : ``}.json`,
        );
        fs.writeFileSync(path, data);
    }


    /** String representation */
    toString() {
        return 'JSON storage backend';
    }
}
