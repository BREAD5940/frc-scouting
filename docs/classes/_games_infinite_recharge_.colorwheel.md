**[@theannalyst/frc-scouting](../README.md)**

> [Globals](../globals.md) / ["games/infinite-recharge"](../modules/_games_infinite_recharge_.md) / ColorWheel

# Class: ColorWheel

Represents the color wheel in Infinite Recharge

## Hierarchy

* [GamePieceTracker](_match_.gamepiecetracker.md)

  ↳ **ColorWheel**

## Index

### Constructors

* [constructor](_games_infinite_recharge_.colorwheel.md#constructor)

### Properties

* [rankingPoints](_games_infinite_recharge_.colorwheel.md#rankingpoints)
* [state](_games_infinite_recharge_.colorwheel.md#state)

### Accessors

* [totalPoints](_games_infinite_recharge_.colorwheel.md#totalpoints)

## Constructors

### constructor

\+ **new ColorWheel**(`state`: [ColorWheelPosition](../modules/_games_infinite_recharge_.md#colorwheelposition) \| null, `cells?`: [PowerCellTracker](_games_infinite_recharge_.powercelltracker.md)): [ColorWheel](_games_infinite_recharge_.colorwheel.md)

*Defined in games/infinite-recharge.ts:70*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state` | [ColorWheelPosition](../modules/_games_infinite_recharge_.md#colorwheelposition) \| null | - |
`cells?` | [PowerCellTracker](_games_infinite_recharge_.powercelltracker.md) | PowerCellTracker for validation  |

**Returns:** [ColorWheel](_games_infinite_recharge_.colorwheel.md)

## Properties

### rankingPoints

•  **rankingPoints**: number = 0

*Overrides [GamePieceTracker](_match_.gamepiecetracker.md).[rankingPoints](_match_.gamepiecetracker.md#rankingpoints)*

*Defined in games/infinite-recharge.ts:70*

___

### state

•  **state**: [ColorWheelPosition](../modules/_games_infinite_recharge_.md#colorwheelposition) \| null

*Defined in games/infinite-recharge.ts:69*

null = no special state

## Accessors

### totalPoints

• get **totalPoints**(): number

*Overrides [GamePieceTracker](_match_.gamepiecetracker.md).[totalPoints](_match_.gamepiecetracker.md#totalpoints)*

*Defined in games/infinite-recharge.ts:92*

gets total points

**Returns:** number
