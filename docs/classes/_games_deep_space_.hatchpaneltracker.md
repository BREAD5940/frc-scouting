**[frc-scouting](../README.md)**

> [Globals](../globals.md) / ["games/deep-space"](../modules/_games_deep_space_.md) / HatchPanelTracker

# Class: HatchPanelTracker

Tracks hatch panels

## Hierarchy

* [DeepSpaceTracker](_games_deep_space_.deepspacetracker.md)

  ↳ **HatchPanelTracker**

## Index

### Constructors

* [constructor](_games_deep_space_.hatchpaneltracker.md#constructor)

### Properties

* [baseValue](_games_deep_space_.hatchpaneltracker.md#basevalue)
* [results](_games_deep_space_.hatchpaneltracker.md#results)
* [type](_games_deep_space_.hatchpaneltracker.md#type)

### Accessors

* [totalPoints](_games_deep_space_.hatchpaneltracker.md#totalpoints)

## Constructors

### constructor

\+ **new HatchPanelTracker**(`results`: Record\<[GamePieceStatus](../modules/_games_deep_space_.md#gamepiecestatus), { autonomous: number ; teleop: number  }>): [HatchPanelTracker](_games_deep_space_.hatchpaneltracker.md)

*Overrides [DeepSpaceTracker](_games_deep_space_.deepspacetracker.md).[constructor](_games_deep_space_.deepspacetracker.md#constructor)*

*Defined in games/deep-space.ts:67*

Creates a new HatchPieceTracker

#### Parameters:

Name | Type |
------ | ------ |
`results` | Record\<[GamePieceStatus](../modules/_games_deep_space_.md#gamepiecestatus), { autonomous: number ; teleop: number  }> |

**Returns:** [HatchPanelTracker](_games_deep_space_.hatchpaneltracker.md)

## Properties

### baseValue

•  **baseValue**: number

*Inherited from [DeepSpaceTracker](_games_deep_space_.deepspacetracker.md).[baseValue](_games_deep_space_.deepspacetracker.md#basevalue)*

*Defined in games/deep-space.ts:29*

doubled in autonomous

___

### results

•  **results**: Record\<[GamePieceStatus](../modules/_games_deep_space_.md#gamepiecestatus), { autonomous: number ; teleop: number  }>

*Inherited from [DeepSpaceTracker](_games_deep_space_.deepspacetracker.md).[results](_games_deep_space_.deepspacetracker.md#results)*

*Defined in games/deep-space.ts:27*

status:number of pieces

___

### type

•  **type**: [GamePiece](../modules/_games_deep_space_.md#gamepiece)

*Inherited from [DeepSpaceTracker](_games_deep_space_.deepspacetracker.md).[type](_games_deep_space_.deepspacetracker.md#type)*

*Defined in games/deep-space.ts:25*

## Accessors

### totalPoints

• get **totalPoints**(): number

*Inherited from [DeepSpaceTracker](_games_deep_space_.deepspacetracker.md).[totalPoints](_games_deep_space_.deepspacetracker.md#totalpoints)*

*Overrides [GamePieceTracker](_match_.gamepiecetracker.md).[totalPoints](_match_.gamepiecetracker.md#totalpoints)*

*Defined in games/deep-space.ts:46*

Returns the total number of points scored

**Returns:** number
