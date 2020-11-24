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
    getMatchByNumber(number: number): Match | null;
    getMatchesByTeam(team: Team<Match> | number): Match[];
    deleteMatchByNumber(number: number): void;
    deleteMatchesByTeam(team: Team<Match> | number): void;
}
