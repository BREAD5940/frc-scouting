/**
 * Tests for Rapid React.
 *
 * TODO: test the storage backends (in backend.test.ts)
 */

import {allianceRapidReactRP, MonkeyBarState, RapidReactMatch, Shots} from '.';

describe('alliance Ranking Point calculation', () => {
    test('cargo RP', () => {
        /** [Auto, Teleop, Correct RP tally] */
        const cases: [Shots, Shots, number][] = [
            // General
            [
                {low: {made: 5, missed: 0}, high: {made: 3, missed: 0}},
                {low: {made: 15, missed: 3}, high: {made: 3, missed: 6}},
                1,
            ],

            // Quintet
            [
                {low: {made: 2, missed: 0}, high: {made: 3, missed: 0}},
                {low: {made: 10, missed: 3}, high: {made: 3, missed: 6}},
                1,
            ],

            // Missed shots
            [
                {low: {made: 2, missed: 1}, high: {made: 2, missed: 1}},
                {low: {made: 5, missed: 2}, high: {made: 5, missed: 1}},
                0,
            ],

            // No shots
            [
                {low: {made: 0, missed: 0}, high: {made: 0, missed: 0}},
                {low: {made: 0, missed: 0}, high: {made: 0, missed: 0}},
                0,
            ],
        ];

        for (const [autoShots, teleopShots, expected] of cases) {
            const robot = new RapidReactMatch(0, '', 0, 'RED', {autoShots, teleopShots, climbing: MonkeyBarState.None});
            expect(allianceRapidReactRP([robot])).toBe(expected);
        }
    });

    test('climbing RP', () => {
        /** [Robot 1, Robot 2, Robot 3, Total RP] */
        const cases: [MonkeyBarState, MonkeyBarState, MonkeyBarState, number][] = [
            // No climbing!
            [MonkeyBarState.None, MonkeyBarState.None, MonkeyBarState.None, 0],
            [MonkeyBarState.DidNotAttempt, MonkeyBarState.None, MonkeyBarState.DidNotAttempt, 0],
            [MonkeyBarState.DidNotAttempt, MonkeyBarState.DidNotAttempt, MonkeyBarState.DidNotAttempt, 0],

            // Climbing, but fewer than 16 points
            [MonkeyBarState.None, MonkeyBarState.None, MonkeyBarState.High, 0],
            [MonkeyBarState.None, MonkeyBarState.Traversal, MonkeyBarState.DidNotAttempt, 0],
            [MonkeyBarState.Low, MonkeyBarState.Mid, MonkeyBarState.Low, 0],

            // >= 16 points!
            [MonkeyBarState.Low, MonkeyBarState.DidNotAttempt, MonkeyBarState.Traversal, 1],
            [MonkeyBarState.High, MonkeyBarState.Low, MonkeyBarState.High, 1],
        ];

        for (const [a, b, c, expected] of cases) {
            const noShot: Shots = {low: {made: 0, missed: 0}, high: {made: 0, missed: 0}};
            const robotA = new RapidReactMatch(0, '', 0, 'RED', {autoShots: noShot, teleopShots: noShot, climbing: a});
            const robotB = new RapidReactMatch(0, '', 0, 'RED', {autoShots: noShot, teleopShots: noShot, climbing: b});
            const robotC = new RapidReactMatch(0, '', 0, 'RED', {autoShots: noShot, teleopShots: noShot, climbing: c});

            expect(allianceRapidReactRP([robotA, robotB, robotC])).toBe(expected);
        }
    });

    test('adds up across multiple robots', () => {
        // This alliance will have a Quintet (5 pts auto) and both RP
        const robotA = new RapidReactMatch(0, '', 0, 'RED', {
            autoShots: {low: {made: 1, missed: 1}, high: {made: 1, missed: 1}}, // 2 auto shots
            teleopShots: {low: {made: 2, missed: 2}, high: {made: 2, missed: 1}}, // 4 teleop shots
            climbing: MonkeyBarState.Low,
        });
        const robotB = new RapidReactMatch(0, '', 0, 'RED', {
            autoShots: {low: {made: 1, missed: 1}, high: {made: 0, missed: 3}}, // 1 auto shot
            teleopShots: {low: {made: 7, missed: 3}, high: {made: 1, missed: 3}}, // 8 teleop shots
            climbing: MonkeyBarState.Mid,
        });
        const robotC = new RapidReactMatch(0, '', 0, 'RED', {
            autoShots: {low: {made: 1, missed: 9999}, high: {made: 2, missed: 3}}, // 3 auto shots
            teleopShots: {low: {made: 2, missed: 3}, high: {made: 4, missed: 1}}, // 6 teleop shots
            climbing: MonkeyBarState.Mid,
        });

        expect(allianceRapidReactRP([robotA, robotB, robotC])).toBe(2);
    });
});

describe('point calculation', () => {
    test('general test cases', () => {
        const reallyGoodAuto = new RapidReactMatch(0, '', 0, 'RED', {
            autoShots: {low: {made: 1, missed: 0}, high: {made: 4, missed: 0}}, // 18
            teleopShots: {low: {made: 2, missed: 3}, high: {made: 10, missed: 0}}, // 22
            climbing: MonkeyBarState.High, // 10
            crossedStartLineInAuto: true, // 5
            pointsFromFouls: 4, // 4
        });
        expect(reallyGoodAuto.points).toBe(59);

        const helpICannotShoot = new RapidReactMatch(0, '', 0, 'RED', {
            autoShots: {low: {made: 0, missed: 2}, high: {made: 0, missed: 1}},
            teleopShots: {low: {made: 0, missed: 5}, high: {made: 0, missed: 9}},
            climbing: MonkeyBarState.Traversal,
            crossedStartLineInAuto: true,
        });
        expect(helpICannotShoot.points).toBe(20);
    });

    test('doubles Auto cargo points', () => {
        const sixCargoPoints = {low: {made: 2, missed: 3}, high: {made: 2, missed: 2}};
        const zeroCargoPoints = {low: {made: 0, missed: 0}, high: {made: 0, missed: 0}};

        const auto = new RapidReactMatch(0, '', 0, 'RED', {
            autoShots: sixCargoPoints,
            teleopShots: zeroCargoPoints,
            climbing: MonkeyBarState.None,
        });
        const teleop = new RapidReactMatch(0, '', 0, 'RED', {
            autoShots: zeroCargoPoints,
            teleopShots: sixCargoPoints,
            climbing: MonkeyBarState.None,
        });

        expect(auto.points).toBe(12);
        expect(teleop.points).toBe(6);
    });

    describe('climbing points', () => {
        it.each([
            {state: MonkeyBarState.DidNotAttempt, desc: 'not attempting to climb', expected: 0},
            {state: MonkeyBarState.None, desc: 'failing to climb', expected: 0},
            {state: MonkeyBarState.Low, desc: 'climbing to the low RUNG', expected: 4},
            {state: MonkeyBarState.Mid, desc: 'climbing to the middle RUNG', expected: 6},
            {state: MonkeyBarState.High, desc: 'climbing to the high RUNG', expected: 10},
            {state: MonkeyBarState.Traversal, desc: 'climbing to the highest (traversal) RUNG', expected: 15},
        ])('$desc should grant $expected points', ({state, expected}) => {
            const match = new RapidReactMatch(0, '', 0, 'RED', {
                autoShots: {low: {made: 0, missed: 0}, high: {made: 0, missed: 0}},
                teleopShots: {low: {made: 0, missed: 0}, high: {made: 0, missed: 0}},
                climbing: state,
            });
            expect(match.points).toBe(expected);
        });
    });

    test('crossing the start line in Auto should grant 5 points', () => {
        const matchNoCross = new RapidReactMatch(0, '', 0, 'RED', {
            autoShots: {low: {made: 0, missed: 0}, high: {made: 0, missed: 0}},
            teleopShots: {low: {made: 0, missed: 0}, high: {made: 0, missed: 0}},
            climbing: MonkeyBarState.None,
        });
        const matchCross = new RapidReactMatch(0, '', 0, 'RED', {
            autoShots: {low: {made: 0, missed: 0}, high: {made: 0, missed: 0}},
            teleopShots: {low: {made: 0, missed: 0}, high: {made: 0, missed: 0}},
            climbing: MonkeyBarState.None,
            crossedStartLineInAuto: true,
        });

        expect(matchNoCross.points).toBe(0);
        expect(matchCross.points).toBe(5);
    });
});
