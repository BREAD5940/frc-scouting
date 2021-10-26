/**
 * Contains the template for a team and match storage backend.
 *
 * @author Annika
 */

import type {Match} from '../match';
import type {Team} from '../team';

export interface StorageBackend {
    saveTeam(team: Team<Match>): void;
    getTeam(number: number): Team<Match> | null;
    deleteTeam(team: Team<Match> | number, deleteMatches?: boolean): void;

    saveMatch(match: Match): void;
    /** Get all match data for a given match number */
    getMatchesByNumber(number: number): Match[];
    /**
     * Gets matches ASSOCIATED with the team (i.e. as part of the team, not just any match scouted for that team)
     * I don't know what the desired behavior is here, and if we deprecate JSON crap it'd be easier to make it do
     * what we actually want.
     */
    getMatchesByTeam(team: Team<Match> | number): Match[];
    deleteMatchByNumber(number: number): void;
    deleteMatchesByTeam(team: Team<Match> | number): void;
}
