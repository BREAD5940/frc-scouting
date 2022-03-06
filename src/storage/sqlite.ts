/**
 * SQLite-based storage.
 *
 * @author Annika
 */

import {Match} from '../match';
import {Team} from '../team';
import {StorageBackend, StorageHooks} from './backend';

import Database from 'better-sqlite3';

/**
 * An interface that describes how to store data in SQL.
 * Each game (Deep Space, Infinite Recharge, etc.) should implement this.
 */
export abstract class SQLStoragePlan<T extends Match> {
    database: Database.Database;
    statementCache: Map<string, Database.Statement> = new Map();

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
    getStatement(query: string): Database.Statement {
        let statement = this.statementCache.get(query);
        if (!statement) {
            statement = this.database.prepare(query);
            this.statementCache.set(query, statement);
        }
        return statement;
    }

    abstract dbDataToMatch(data: any): T;
    /**
     * @deprecated as of 0.3.0, this shouldn't be necessary for anything
     */
    dbDataToTeam(data: {id: number, number: number}): Team<T> {
        const matches = this.getStatement(`SELECT * FROM matches WHERE team_number = ?`)
            .all(data.id)
            .map((matchData) => this.dbDataToMatch(matchData));

        return new Team(data.number, ...matches);
    }

    /** Returns true if the match can be stored with this interface and false otherwise. */
    abstract applies(match: Match): boolean;

    /** Inserts match  */
    abstract insertMatch(match: T): void;
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
}

/** Stores teams and matches from various games in SQL. */
export class SQLBackend implements StorageBackend {
    plans: SQLStoragePlan<Match>[];
    hooks: Partial<StorageHooks>;

    /** Creates a new SQL backend */
    constructor(hooks: Partial<StorageHooks>, ...plans: SQLStoragePlan<Match>[]) {
        this.plans = plans;
        this.hooks = hooks;
    }

    /** Registers a new storage plan */
    registerPlan(plan: SQLStoragePlan<Match>) {
        this.plans.push(plan);
    }

    /** Saves a team */
    saveTeam(team: Team<Match>) {
        if (!team.matches.length) {
            // this is an SQL specific error (JSON can store teams without matches)....
            // sigh
            throw new Error(`This team has no matches, so we don't know where to save it.`);
        }

        for (const plan of this.plans) {
            if (team.matches.every((match) => plan.applies(match))) {
                for (const match of team.matches) {
                    this.hooks.onSaveMatch?.(match);
                    plan.insertMatch(match);
                }
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
            const matches = plan.getMatches([{column: 'team_number', value: number}]);
            if (matches.length) {
                return new Team<typeof matches[0]>(number, ...matches);
            }
        }
        return null;
    }

    /** deletes all matches involving a team */
    deleteTeam(team: Team<Match> | number) {
        const value = typeof team === 'number' ? team : team.number;
        for (const plan of this.plans) {
            plan.deleteMatches([{column: 'team_number', value}]);
        }
    }

    /** saves a match */
    saveMatch(match: Match) {
        for (const plan of this.plans) {
            if (plan.applies(match)) {
                plan.insertMatch(match);
                this.hooks.onSaveMatch?.(match);
                return;
            }
        }
        throw new Error(
            `Could not find a SQL storage plan to save the match with. Make sure a storage plan is registered`,
        );
    }

    /** gets matches */
    getMatchesByNumber(number: number) {
        const matches = [];
        for (const plan of this.plans) {
            matches.push(...plan.getMatches([{column: 'match_number', value: number}]));
        }
        if (this.hooks.onGetMatch) matches.every((m) => this.hooks.onGetMatch!(m));
        return matches;
    }

    /** gets one match */
    getMatchByNumber(number: number) {
        return this.getMatchesByNumber(number).pop() || null;
    }

    /** gets matches */
    getMatchesByTeam(team: Team<Match> | number) {
        const value = typeof team === 'number' ? team : team.number;
        const results = [];
        for (const plan of this.plans) {
            results.push(...plan.getMatches([{column: 'team_number', value}]));
        }
        if (this.hooks.onGetMatch) results.every((m) => this.hooks.onGetMatch!(m));
        return results;
    }

    /** deletes a match */
    deleteMatchByNumber(number: number) {
        this.hooks.onDeleteMatch?.(number);
        for (const plan of this.plans) {
            plan.deleteMatches([{column: 'match_number', value: number}]);
        }
    }

    /** deletes matches */
    deleteMatchesByTeam(team: Team<Match> | number) {
        const value = typeof team === 'number' ? team : team.number;
        for (const plan of this.plans) {
            plan.deleteMatches([{column: 'team_number', value}]);
        }
    }

    /** String representation */
    toString() {
        return 'SQL storage backend';
    }
}
