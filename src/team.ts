/**
 * Models FRC teams
 *
 * @author Annika
 */

import {Match} from './match';
import {StorageBackend} from './storage/backend';

/** Represents a FRC team */
export class Team {
    number: number;
    /** the matches that the team played in */
    matches: Match[];

    /**
     * Instantiates a new team.
     * TODO: support passing in match numbers and looking them up from the DB
     */
    constructor(number: number, ...matches: Match[]) {
        this.number = number;
        this.matches = matches;
    }

    /** Gets the mean of any match property */
    getMean(property: keyof Match) {
        if (typeof this.matches[0][property] !== 'number') {
            throw new Error(`Attempted to get the mean of a non-number property of a Match ('${property}')`);
        }

        // `as` is safe because we check the type of the first match above
        return this.matches.reduce((acc, match) => acc + (match[property] as number), 0) / this.matches.length;
    }

    /** Gets the mode of any match property */
    getMode(property: keyof Match) {
        /** value:occurences */
        const occurences = new Map<number, number>();
        for (const match of this.matches) {
            const value = match[property];
            if (typeof value !== 'number') {
                throw new Error(`Attempted to get the mode of a non-number property of a Match ('${property}')`);
            }
            occurences.set(value, (occurences.get(value) || 0) + 1);
        }

        return [...occurences].sort(
            // Sort occurences in descending order
            (a, b) => b[1] - a[1],
        )[0]?.[0];
    }

    /** Gets the median of any match property */
    getMedian(property: keyof Match) {
        if (typeof this.matches[0][property] !== 'number') {
            throw new Error(`Attempted to get the median of a non-number property of a Match ('${property}')`);
        }

        // `as` is safe because we check the type of the first match above
        const sortedValues = this.matches
            .map((match) => match[property] as number)
            .sort((a, b) => a - b);

        const middle = sortedValues.length / 2;
        if (sortedValues.length % 2 === 0) {
            // Even number of matches – take average of two middle elements
            return (sortedValues[middle] + sortedValues[middle - 1]) / 2;
        } else {
            return sortedValues[Math.floor(middle)];
        }
    }

    /** Adds a match to the team */
    addMatch(match: Match) {
        if (match.teamNumber !== this.number) {
            throw new Error(`Cannot add match from team ${match.teamNumber} to team ${this.number}`);
        }
        this.matches.push(match);
    }

    /** Adds all matches for the team */
    addAllMatches(storage: StorageBackend) {
        this.matches.push(...storage.getMatchesByTeam(this));
    }
}
