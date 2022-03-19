[frc-scouting](../README.md) / [Exports](../modules.md) / [DeepSpace](../modules/DeepSpace.md) / HatchPanelTracker

# Class: HatchPanelTracker

[DeepSpace](../modules/DeepSpace.md).HatchPanelTracker

Tracks hatch panels

## Hierarchy

- `DeepSpaceTracker`

  ↳ **`HatchPanelTracker`**

## Table of contents

### Constructors

- [constructor](DeepSpace.HatchPanelTracker.md#constructor)

### Properties

- [baseValue](DeepSpace.HatchPanelTracker.md#basevalue)
- [rankingPoints](DeepSpace.HatchPanelTracker.md#rankingpoints)
- [results](DeepSpace.HatchPanelTracker.md#results)
- [type](DeepSpace.HatchPanelTracker.md#type)

### Accessors

- [totalPoints](DeepSpace.HatchPanelTracker.md#totalpoints)

## Constructors

### constructor

• **new HatchPanelTracker**(`results`)

Creates a new HatchPieceTracker

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | `Record`<`GamePieceStatus`, { `auto`: `number` ; `teleop`: `number`  }\> |

#### Overrides

DeepSpaceTracker.constructor

#### Defined in

[games/deep-space/index.ts:71](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/deep-space/index.ts#L71)

## Properties

### baseValue

• **baseValue**: `number`

doubled in auto

#### Inherited from

DeepSpaceTracker.baseValue

#### Defined in

[games/deep-space/index.ts:30](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/deep-space/index.ts#L30)

___

### rankingPoints

• **rankingPoints**: `number` = `0`

#### Inherited from

DeepSpaceTracker.rankingPoints

#### Defined in

[games/deep-space/index.ts:31](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/deep-space/index.ts#L31)

___

### results

• **results**: `Record`<`GamePieceStatus`, { `auto`: `number` ; `teleop`: `number`  }\>

status:number of pieces

#### Inherited from

DeepSpaceTracker.results

#### Defined in

[games/deep-space/index.ts:28](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/deep-space/index.ts#L28)

___

### type

• **type**: `GamePiece`

#### Inherited from

DeepSpaceTracker.type

#### Defined in

[games/deep-space/index.ts:26](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/deep-space/index.ts#L26)

## Accessors

### totalPoints

• `get` **totalPoints**(): `number`

Returns the total number of points scored

#### Returns

`number`

#### Inherited from

DeepSpaceTracker.totalPoints

#### Defined in

[games/deep-space/index.ts:48](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/deep-space/index.ts#L48)
