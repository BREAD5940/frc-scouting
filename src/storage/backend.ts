/**
 * Contains the template for a team and match storage backend.
 *
 * @author Annika
 */

import type {Match} from '../match';
import type {Team} from '../team';

/**
 * Hooks executed on various storage-related events.
 */
export interface StorageHooks {
    /**
     * Runs when a match is stored.
     */
    onSaveMatch(match: Match): void;

    /**
     * Runs when a match is deleted, unless it is deleted by team number.
     */
    onDeleteMatch(number: number): void;

    /**
     * Runs when a match is retrieved.
     */
    onGetMatch(match: Match): void;
}

export interface StorageBackend {
    hooks: Partial<StorageHooks>;

    saveTeam(team: Team<Match>): void;
    getTeam(number: number): Team<Match> | null;
    deleteTeam(team: Team<Match> | number, deleteMatches?: boolean): void;

    saveMatch(match: Match): void;
    /** Get all match data for a given match number */
    getMatchesByNumber(number: number): Match[];
    getMatchByNumber(number: number): Match | null;
    getMatchesByTeam(team: Team<Match> | number): Match[];
    deleteMatchByNumber(number: number): void;
    deleteMatchesByTeam(team: Team<Match> | number): void;
}
