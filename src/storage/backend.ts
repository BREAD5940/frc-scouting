/**
 * Contains the template for a team and match storage backend.
 *
 * @author Annika
 */

import type {Match} from '../match';
import type {Team} from '../team';

export interface StorageBackend {
    saveTeam(team: Team): void;
    getTeam(number: number): Team | null;
    deleteTeam(team: Team | number, deleteMatches?: boolean): void;

    saveMatch(match: Match): void;
    getMatchByNumber(number: number): Match | null;
    getMatchesByTeam(team: Team | number): Match[];
    deleteMatchByNumber(number: number): void;
    deleteMatchesByTeam(team: Team | number): void;
}
