import {Match, GamePieceTracker} from './match';

/** A match for testing */
export class TestMatch extends Match {}
/** A game piece tracker for testing */
class TestTracker extends GamePieceTracker {
    totalPoints: number;
    rankingPoints = 0;

    /** constructor */
    constructor(points: number) {
        super();
        this.totalPoints = points;
    }
}

describe('point calculation', () => {
    it('should make sense', () => {
        const match = new TestMatch(
            1, 'test', 5940, 'BLUE', [new TestTracker(15)], {pointsFromFouls: 15, bonusPoints: 20},
        );
        expect(match.points).toEqual(15 + 15 + 20);
    });

    it('should award five points for crossing the start line in auto', () => {
        const match = new TestMatch(
            1, 'test', 5940, 'BLUE', [new TestTracker(15)], {pointsFromFouls: 15, crossedStartLineInAuto: true},
        );
        expect(match.points).toEqual(15 + 15 + 5);
    });
});
