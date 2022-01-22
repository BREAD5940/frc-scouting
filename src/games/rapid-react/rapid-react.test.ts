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
    test.todo('general test cases');
    test.todo('doubles Auto cargo points');
    test.todo('climbing points');
    test.todo('crossing the start line');
    test.todo('fouls assessed against the robot');
});
