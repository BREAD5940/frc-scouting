**[frc-scouting](README.md)**

> [Globals](globals.md)

# frc-scouting
![tests](https://github.com/TheAnnalyst/frc-scouting/workflows/tests/badge.svg?branch=main) [![coverage](https://codecov.io/gh/TheAnnalyst/frc-scouting/branch/main/graph/badge.svg?token=AL02Q8BYwp)](https://codecov.io/gh/TheAnnalyst/frc-scouting)

A TypeScript library for handling FRC scouting data from robotics tournaments.

Currently, it supports both Deep Space and Infinite Recharge.

## Example
```ts
import {SQLBackend, DeepSpace, Team} from 'frc-scouting';

const cargo = new DeepSpace.CargoTracker({
    DROPPED: {autonomous: 0, teleop: 1},
    SHIP: {autonomous: 1, teleop: 3},
    ROCKET: {autonomous: 2, teleop: 3},
});

const myScoutedMatch = new DeepSpace.DeepSpaceMatch(
    5940, 'match', 1, 'RED', {
        initialHABLevel: 1,
        cargo,
        finalHABLevel: 3,
        bonusPoints: 12
    },
);

console.log(myScoutedMatch.points); // 48

const myTeam = new Team(5940);
myTeam.addMatches(myScoutedMatch);

console.log(myTeam.getMean('points')); // 48

const sqlPlan = new DeepSpace.DeepSpaceSQL(':memory:');
const storage = new SQLBackend(sqlPlan);
storage.saveTeam(myTeam);

const myTeamLoaded = storage.getTeam(5940);
console.log(myTeamLoaded?.getMean('points')); // 48
```

## Documentation
More detailed documentation can found [here](https://github.com/TheAnnalyst/frc-scouting/blob/main/docs/modules/_index_.md).
