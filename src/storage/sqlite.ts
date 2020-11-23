/**
 * SQLite-based storage.
 *
 * @author Annika
 */

import {Match} from '../match';
import {Team} from '../team';
import {StorageBackend} from './backend';

import Database from 'better-sqlite3';

/**
 * An interface that describes how to store data in SQL.
 * Each game (Deep Space, Infinite Recharge, etc.) should implement this.
 */
export abstract class SQLStoragePlan {
    database: Database.Database;
    statementCache: Map<string, Database.Statement<(string | number)[]>> = new Map();

    /** Creates a new storage plan */
    constructor(absolutePath: string) {
        this.database = new Database(absolutePath);
    }

    /** Generates a where statement and arguments from conditions */
    private generateWhere(conditions: {column: string, value: string | number}[]) {
        const args: (string | number)[] = [];
        const where = conditions.map((cond) => {
            args.push(cond.value);
            return `${cond.column} = ?`;
        }).join(' ');

        return [args, where.length ? `WHERE ${where}` : ``];
    }

    /** Gets the cached prepared statement, or generates it and adds it to the cache. */
    getStatement(query: string) {
        let statement = this.statementCache.get(query);
        if (!statement) {
            statement = this.database.prepare(query);
            this.statementCache.set(query, statement);
        }
        return statement;
    }

    abstract dbDataToMatch(data: any): Match;
    abstract dbDataToTeam(data: any): Team;

    /** Returns true if the match can be stored with this interface and false otherwise. */
    abstract applies(match: Match): boolean;

    /** Inserts match  */
    abstract insertMatch(match: Match): boolean;
    /** gets matches */
    getMatches(conditions: {column: string, value: string | number}[]) {
        const [args, where] = this.generateWhere(conditions);
        const statement = this.getStatement(`SELECT * FROM matches ${where}`);

        return statement.all(...args).map((data) => this.dbDataToMatch(data));
    }
    /** deletes matches */
    deleteMatches(conditions: {column: string, value: string | number}[]) {
        const [args, where] = this.generateWhere(conditions);
        const statement = this.getStatement(`DELETE FROM matches ${where}`);

        statement.run(...args);
    }

    /** Inserts team */
    abstract insertTeam(team: Team): boolean;
    /** gets teams */
    getTeams(conditions: {column: string, value: string | number}[]) {
        const [args, where] = this.generateWhere(conditions);
        const statement = this.getStatement(`SELECT * FROM teams ${where}`);

        return statement.all(...args).map((data) => this.dbDataToTeam(data));
    }
    /** deletes teams */
    deleteTeams(conditions: {column: string, value: string | number}[]) {
        const [args, where] = this.generateWhere(conditions);
        const statement = this.getStatement(`DELETe FROM teams ${where}`);

        statement.run(...args);
    }
}

/** Stores teams and matches from various games in SQL. */
export class SQLBackend implements StorageBackend {
    plans: SQLStoragePlan[];

    /** Creates a new SQL backend */
    constructor(...plans: SQLStoragePlan[]) {
        this.plans = plans;
    }

    /** Registers a new storage plan */
    registerPlan(plan: SQLStoragePlan) {
        this.plans.push(plan);
    }

    /** Saves a team */
    saveTeam(team: Team) {
        if (!team.matches.length) {
            throw new Error(`This team has no matches, so we don't know where to save it.`);
        }

        for (const plan of this.plans) {
            if (team.matches.every((match) => plan.applies(match))) {
                plan.insertTeam(team);
                return;
            }
        }
        throw new Error(
            `Could not find a SQL storage plan to save the team.` +
            ` Either the team has matches from multiple games or you didn't register the storage plan.`,
        );
    }

    /** gets a team */
    getTeam(number: number) {
        for (const plan of this.plans) {
            const teams = plan.getTeams([{column: 'number', value: number}]);
            if (teams.length > 1) {
                throw new Error(`Somehow there are multiple teams in one storage plan with that number.`);
            }
            if (teams[0]) return teams[0];
        }
        return null;
    }

    /** deletes a team */
    deleteTeam(team: Team | number, deleteMatches?: boolean) {
        const value = typeof team === 'number' ? team : team.number;
        for (const plan of this.plans) {
            plan.deleteTeams([{column: 'number', value}]);
            if (deleteMatches) plan.deleteMatches([{column: 'team_number', value}]);
        }
    }

    /** saves a match */
    saveMatch(match: Match) {
        for (const plan of this.plans) {
            if (plan.applies(match)) {
                plan.insertMatch(match);
                return;
            }
        }
        throw new Error(
            `Could not find a SQL storage plan to save the match with. Make sure a storage plan is registered`,
        );
    }

    /** gets a match */
    getMatchByNumber(number: number) {
        for (const plan of this.plans) {
            const matches = plan.getMatches([{column: 'match_number', value: number}]);
            if (matches.length > 1) {
                throw new Error(`Somehow there are multiple matches in one storage plan with that number.`);
            }
            if (matches[0]) return matches[0];
        }
        return null;
    }

    /** gets matches */
    getMatchesByTeam(team: Team | number) {
        const value = typeof team === 'number' ? team : team.number;
        const results = [];
        for (const plan of this.plans) {
            results.push(...plan.getMatches([{column: 'team_number', value}]));
        }
        return results;
    }

    /** deletes a match */
    deleteMatchByNumber(number: number) {
        for (const plan of this.plans) {
            plan.deleteMatches([{column: 'match_number', value: number}]);
        }
    }

    /** deletes matches */
    deleteMatchesByTeam(team: Team | number) {
        const value = typeof team === 'number' ? team : team.number;
        for (const plan of this.plans) {
            plan.deleteMatches([{column: 'team_number', value}]);
        }
    }
}
