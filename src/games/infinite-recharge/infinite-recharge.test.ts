/**
 * Tests for Infinite Recharge
 *
 * @author Annika
 */

import {PowerCellTracker, ColorWheel, ShieldGenerator, InfiniteRechargeMatch} from '.';

describe('power cells', () => {
    const tracker = new PowerCellTracker({
        LOW: {auto: 1, teleop: 2}, // 4 points
        OUTER: {auto: 3, teleop: 1}, // 14 points
        INNER: {auto: 2, teleop: 3}, // 21 points
    }, false);

    const trackerWithSpin = new PowerCellTracker({
        LOW: {auto: 1, teleop: 2}, // 4 points
        OUTER: {auto: 3, teleop: 1}, // 14 points
        INNER: {auto: 2, teleop: 3}, // 21 points
    }, true);

    const trackerWithLotsOfCellsAndSpin = new PowerCellTracker({
        LOW: {auto: 4, teleop: 4}, // 12 points
        OUTER: {auto: 4, teleop: 4}, // 24 points
        INNER: {auto: 4, teleop: 4}, // 36 points
    }, true);


    it('should tally points correctly', () => {
        expect(tracker.totalPoints).toEqual(39);
        expect(trackerWithSpin.totalPoints).toEqual(39);
        expect(trackerWithLotsOfCellsAndSpin.totalPoints).toEqual(72);
    });

    it('should tally total cells correctly', () => {
        expect(tracker.totalCells).toEqual(12);
        expect(trackerWithSpin.totalCells).toEqual(12);
        expect(trackerWithLotsOfCellsAndSpin.totalCells).toEqual(24);
    });

    it(`shouldn't provide ranking points unless the number of power cells is >= 20 and the wheel has been spun`, () => {
        expect(tracker.rankingPoints).toEqual(0);
        expect(trackerWithSpin.rankingPoints).toEqual(0);
        expect(trackerWithLotsOfCellsAndSpin.rankingPoints).toEqual(1);
    });
});

describe('color wheel', () => {
    const rotated = new ColorWheel('ROTATED_X_TIMES');
    const atColor = new ColorWheel('SPECIFIC_COLOR');
    const notMoved = new ColorWheel(null);
    it('should return the correct number of points and ranking points', () => {
        expect(rotated.totalPoints).toEqual(20);
        expect(atColor.totalPoints).toEqual(10);
        expect(notMoved.totalPoints).toEqual(0);
    });

    it('should produce zero ranking points', () => {
        expect(rotated.rankingPoints).toEqual(0);
        expect(atColor.rankingPoints).toEqual(0);
        expect(notMoved.rankingPoints).toEqual(0);
    });

    it('should validate the provided power cell tracker', () => {
        const fiveCellTracker = new PowerCellTracker({
            LOW: {teleop: 1, auto: 1},
            INNER: {teleop: 1, auto: 1},
            OUTER: {teleop: 1, auto: 0},
        }, true);
        const tenCellTracker = new PowerCellTracker({
            LOW: {teleop: 2, auto: 2},
            INNER: {teleop: 2, auto: 2},
            OUTER: {teleop: 1, auto: 1},
        }, true);
        const twentyCellTracker = new PowerCellTracker({
            LOW: {teleop: 4, auto: 4},
            INNER: {teleop: 4, auto: 4},
            OUTER: {teleop: 2, auto: 2},
        }, true);

        // sanity
        expect(fiveCellTracker.totalCells).toEqual(5);
        expect(tenCellTracker.totalCells).toEqual(10);
        expect(twentyCellTracker.totalCells).toEqual(20);

        expect(() => new ColorWheel(null, fiveCellTracker)).not.toThrow();
        expect(() => new ColorWheel(null, tenCellTracker)).not.toThrow();
        expect(() => new ColorWheel(null, twentyCellTracker)).not.toThrow();

        expect(() => new ColorWheel('ROTATED_X_TIMES', fiveCellTracker)).toThrowError(/Need 9 Power Cells/);
        expect(() => new ColorWheel('ROTATED_X_TIMES', tenCellTracker)).not.toThrow();
        expect(() => new ColorWheel('ROTATED_X_TIMES', twentyCellTracker)).not.toThrow();

        expect(() => new ColorWheel('SPECIFIC_COLOR', fiveCellTracker)).toThrowError(/Need 20 Power Cells/);
        expect(() => new ColorWheel('SPECIFIC_COLOR', tenCellTracker)).toThrowError(/Need 20 Power Cells/);
        expect(() => new ColorWheel('SPECIFIC_COLOR', twentyCellTracker)).not.toThrow();
    });
});

describe('shield generator', () => {
    it('should correctly tally points', () => {
        // Hanging & floor bots
        expect(new ShieldGenerator(2, 1, false).totalPoints).toEqual(55);

        // Levelling out
        expect(new ShieldGenerator(2, 1, true).totalPoints).toEqual(70);
    });

    it('should award a ranking point for scoring >= 65 points', () => {
        const lessThanSixtyFive = new ShieldGenerator(1, 1, false);
        const sixtyFive = new ShieldGenerator(2, 0, true);
        const moreThanSixtyFive = new ShieldGenerator(3, 0, true);

        // sanity checks
        expect(lessThanSixtyFive.totalPoints).toBeLessThan(65);
        expect(sixtyFive.totalPoints).toEqual(65);
        expect(moreThanSixtyFive.totalPoints).toBeGreaterThan(65);

        expect(lessThanSixtyFive.rankingPoints).toEqual(0);
        expect(sixtyFive.rankingPoints).toEqual(1);
        expect(moreThanSixtyFive.rankingPoints).toEqual(1);
    });
});

it('should tally points properly', () => {
    const match = new InfiniteRechargeMatch(5940, 'test', 1, 'RED', {
        powerCells: new PowerCellTracker({
            LOW: {auto: 1, teleop: 2}, // 4 points
            OUTER: {auto: 3, teleop: 10}, // 32 points
            INNER: {auto: 2, teleop: 3}, // 21 points
        }, true), // 57 points total
        colorWheel: new ColorWheel('SPECIFIC_COLOR'), // 10 pts
        shieldGenerator: new ShieldGenerator(2, 1, true), // 70 pts
    });

    expect(match.points).toEqual(57 + 10 + 70);
    expect(match.rankingPoints).toEqual(2); // Stage 3 shield + >65 endgame pts
});
