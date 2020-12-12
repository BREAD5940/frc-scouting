**[frc-scouting](../README.md)**

> [Globals](../globals.md) / ["games/infinite-recharge"](../modules/_games_infinite_recharge_.md) / ShieldGenerator

# Class: ShieldGenerator

Represents the central Shield Generator.
Includes Endgame bonus point stuff (which I don't fully understand).

## Hierarchy

* [GamePieceTracker](_match_.gamepiecetracker.md)

  ↳ **ShieldGenerator**

## Index

### Constructors

* [constructor](_games_infinite_recharge_.shieldgenerator.md#constructor)

### Properties

* [floorBots](_games_infinite_recharge_.shieldgenerator.md#floorbots)
* [hangingBots](_games_infinite_recharge_.shieldgenerator.md#hangingbots)
* [isLevel](_games_infinite_recharge_.shieldgenerator.md#islevel)

### Accessors

* [rankingPoints](_games_infinite_recharge_.shieldgenerator.md#rankingpoints)
* [totalPoints](_games_infinite_recharge_.shieldgenerator.md#totalpoints)

## Constructors

### constructor

\+ **new ShieldGenerator**(`hangingBots`: [NumberOfBots](../modules/_games_infinite_recharge_.md#numberofbots), `floorBots`: [NumberOfBots](../modules/_games_infinite_recharge_.md#numberofbots), `isLevel`: boolean): [ShieldGenerator](_games_infinite_recharge_.shieldgenerator.md)

*Defined in games/infinite-recharge.ts:111*

construction owo

#### Parameters:

Name | Type |
------ | ------ |
`hangingBots` | [NumberOfBots](../modules/_games_infinite_recharge_.md#numberofbots) |
`floorBots` | [NumberOfBots](../modules/_games_infinite_recharge_.md#numberofbots) |
`isLevel` | boolean |

**Returns:** [ShieldGenerator](_games_infinite_recharge_.shieldgenerator.md)

## Properties

### floorBots

•  **floorBots**: [NumberOfBots](../modules/_games_infinite_recharge_.md#numberofbots)

*Defined in games/infinite-recharge.ts:109*

___

### hangingBots

•  **hangingBots**: [NumberOfBots](../modules/_games_infinite_recharge_.md#numberofbots)

*Defined in games/infinite-recharge.ts:108*

___

### isLevel

•  **isLevel**: boolean

*Defined in games/infinite-recharge.ts:111*

## Accessors

### rankingPoints

• get **rankingPoints**(): number

*Overrides [GamePieceTracker](_match_.gamepiecetracker.md).[rankingPoints](_match_.gamepiecetracker.md#rankingpoints)*

*Defined in games/infinite-recharge.ts:129*

gets total ranking points

**Returns:** number

___

### totalPoints

• get **totalPoints**(): number

*Overrides [GamePieceTracker](_match_.gamepiecetracker.md).[totalPoints](_match_.gamepiecetracker.md#totalpoints)*

*Defined in games/infinite-recharge.ts:124*

total points

**Returns:** number
