import {DeepSpaceMatch, HatchPanelTracker, CargoTracker} from '.';

describe('input data validation', () => {
    test('HAB ranking point', () => {
        expect(() => {
            // Not enough bonus points for HAB ranking point
            new DeepSpaceMatch(5940, 'test', 1, 'RED', {
                initialHABLevel: 1, bonusPoints: 1, rankingPointRecord: {ROCKET: false, HAB: true},
            });
        }).toThrowError(/not 15 bonus points/);

        expect(() => {
            // Enough bonus points for HAB ranking point!
            new DeepSpaceMatch(5940, 'test', 2, 'RED', {
                initialHABLevel: 1, bonusPoints: 15, rankingPointRecord: {ROCKET: false, HAB: true},
            });
        }).not.toThrow();
    });

    test('rocket ranking point', () => {
        expect(() => {
            // Not enough rockets for rocket ranking point
            new DeepSpaceMatch(5940, 'test', 3, 'RED', {
                initialHABLevel: 1,
                rocketsAssembled: {RIGHT: false, LEFT: false},
                rankingPointRecord: {ROCKET: true, HAB: false},
            });
        }).toThrowError(/neither rocket is complete/);

        expect(() => {
            // Enough rockets for rocket ranking point
            new DeepSpaceMatch(5940, 'test', 4, 'RED', {
                initialHABLevel: 1,
                rocketsAssembled: {RIGHT: true, LEFT: false},
                rankingPointRecord: {ROCKET: true, HAB: false},
            });
        }).not.toThrow();
    });
});

describe('points tallying', () => {
    test('proper function', () => {
        const hatches = new HatchPanelTracker({
            DROPPED: {auto: 2, teleop: 1}, // 0 points
            ROCKET: {auto: 1, teleop: 2}, // 8 points
            SHIP: {auto: 2, teleop: 3}, // 14 points
        });
        expect(hatches.totalPoints).toEqual(22);

        const cargo = new CargoTracker({
            DROPPED: {auto: 0, teleop: 1}, // 0 points
            ROCKET: {auto: 1, teleop: 3}, // 15 points
            SHIP: {auto: 1, teleop: 2}, // 12 points
        });
        expect(cargo.totalPoints).toEqual(27);

        const match = new DeepSpaceMatch(5940, 'test', 5, 'RED', {cargo, hatches, initialHABLevel: 1});

        expect(match.points).toEqual(49);
        expect(match.bonusPoints).toEqual(0);
        expect(match.pointsFromFouls).toEqual(0);
    });
});
