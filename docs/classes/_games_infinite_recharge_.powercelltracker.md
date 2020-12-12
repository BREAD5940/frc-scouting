**[frc-scouting](../README.md)**

> [Globals](../globals.md) / ["games/infinite-recharge"](../modules/_games_infinite_recharge_.md) / PowerCellTracker

# Class: PowerCellTracker

Tracks a Power Cell

## Hierarchy

* [GamePieceTracker](_match_.gamepiecetracker.md)

  ↳ **PowerCellTracker**

## Index

### Constructors

* [constructor](_games_infinite_recharge_.powercelltracker.md#constructor)

### Properties

* [colorWheelSpun](_games_infinite_recharge_.powercelltracker.md#colorwheelspun)
* [results](_games_infinite_recharge_.powercelltracker.md#results)

### Accessors

* [rankingPoints](_games_infinite_recharge_.powercelltracker.md#rankingpoints)
* [totalCells](_games_infinite_recharge_.powercelltracker.md#totalcells)
* [totalPoints](_games_infinite_recharge_.powercelltracker.md#totalpoints)

## Constructors

### constructor

\+ **new PowerCellTracker**(`results`: PowerCellTracker[\"results\"], `colorWheelSpun`: boolean): [PowerCellTracker](_games_infinite_recharge_.powercelltracker.md)

*Defined in games/infinite-recharge.ts:31*

creates a new PowerCellTracker

#### Parameters:

Name | Type |
------ | ------ |
`results` | PowerCellTracker[\"results\"] |
`colorWheelSpun` | boolean |

**Returns:** [PowerCellTracker](_games_infinite_recharge_.powercelltracker.md)

## Properties

### colorWheelSpun

•  **colorWheelSpun**: boolean

*Defined in games/infinite-recharge.ts:31*

___

### results

•  **results**: Record\<[PowerCellLocation](../modules/_games_infinite_recharge_.md#powercelllocation), { auto: number ; teleop: number  }>

*Defined in games/infinite-recharge.ts:30*

## Accessors

### rankingPoints

• get **rankingPoints**(): number

*Overrides [GamePieceTracker](_match_.gamepiecetracker.md).[rankingPoints](_match_.gamepiecetracker.md#rankingpoints)*

*Defined in games/infinite-recharge.ts:58*

rp

**Returns:** number

___

### totalCells

• get **totalCells**(): number

*Defined in games/infinite-recharge.ts:53*

the number of power cells scored

**Returns:** number

___

### totalPoints

• get **totalPoints**(): number

*Overrides [GamePieceTracker](_match_.gamepiecetracker.md).[totalPoints](_match_.gamepiecetracker.md#totalpoints)*

*Defined in games/infinite-recharge.ts:41*

the total points scored

**Returns:** number
