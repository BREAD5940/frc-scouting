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

test('point calculation makes sense', () => {
    const match = new TestMatch(
        1, 'test', 5940, 'BLUE', [new TestTracker(15)], {pointsFromFouls: 15, bonusPoints: 20},
    );
    expect(match.points).toEqual(15 + 15 + 20);
});
