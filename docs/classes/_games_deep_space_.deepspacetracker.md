**[@theannalyst/frc-scouting](../README.md)**

> [Globals](../globals.md) / ["games/deep-space"](../modules/_games_deep_space_.md) / DeepSpaceTracker

# Class: DeepSpaceTracker

Tracks a game piece.

## Hierarchy

* [GamePieceTracker](_match_.gamepiecetracker.md)

  ↳ **DeepSpaceTracker**

  ↳↳ [CargoTracker](_games_deep_space_.cargotracker.md)

  ↳↳ [HatchPanelTracker](_games_deep_space_.hatchpaneltracker.md)

## Index

### Constructors

* [constructor](_games_deep_space_.deepspacetracker.md#constructor)

### Properties

* [baseValue](_games_deep_space_.deepspacetracker.md#basevalue)
* [rankingPoints](_games_deep_space_.deepspacetracker.md#rankingpoints)
* [results](_games_deep_space_.deepspacetracker.md#results)
* [type](_games_deep_space_.deepspacetracker.md#type)

### Accessors

* [totalPoints](_games_deep_space_.deepspacetracker.md#totalpoints)

## Constructors

### constructor

\+ **new DeepSpaceTracker**(`type`: [GamePiece](../modules/_games_deep_space_.md#gamepiece), `baseValue`: number, `results`: Record\<[GamePieceStatus](../modules/_games_deep_space_.md#gamepiecestatus), { auto: number ; teleop: number  }>): [DeepSpaceTracker](_games_deep_space_.deepspacetracker.md)

*Defined in games/deep-space.ts:30*

Constructs a new GamePieceTracker. Should be extended not called directly.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | [GamePiece](../modules/_games_deep_space_.md#gamepiece) | - |
`baseValue` | number | - |
`results` | Record\<[GamePieceStatus](../modules/_games_deep_space_.md#gamepiecestatus), { auto: number ; teleop: number  }> | status:number of pieces record  |

**Returns:** [DeepSpaceTracker](_games_deep_space_.deepspacetracker.md)

## Properties

### baseValue

•  **baseValue**: number

*Defined in games/deep-space.ts:29*

doubled in auto

___

### rankingPoints

•  **rankingPoints**: number = 0

*Overrides [GamePieceTracker](_match_.gamepiecetracker.md).[rankingPoints](_match_.gamepiecetracker.md#rankingpoints)*

*Defined in games/deep-space.ts:30*

___

### results

•  **results**: Record\<[GamePieceStatus](../modules/_games_deep_space_.md#gamepiecestatus), { auto: number ; teleop: number  }>

*Defined in games/deep-space.ts:27*

status:number of pieces

___

### type

•  **type**: [GamePiece](../modules/_games_deep_space_.md#gamepiece)

*Defined in games/deep-space.ts:25*

## Accessors

### totalPoints

• get **totalPoints**(): number

*Overrides [GamePieceTracker](_match_.gamepiecetracker.md).[totalPoints](_match_.gamepiecetracker.md#totalpoints)*

*Defined in games/deep-space.ts:47*

Returns the total number of points scored

**Returns:** number
