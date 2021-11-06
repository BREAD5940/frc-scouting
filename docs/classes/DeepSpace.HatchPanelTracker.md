[@bread5940/frc-scouting](../README.md) / [Exports](../modules.md) / [DeepSpace](../modules/DeepSpace.md) / HatchPanelTracker

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
| `results` | `Record`<`GamePieceStatus`, `Object`\> |

#### Overrides

DeepSpaceTracker.constructor

#### Defined in

games/deep-space.ts:71

## Properties

### baseValue

• **baseValue**: `number`

doubled in auto

#### Inherited from

DeepSpaceTracker.baseValue

#### Defined in

games/deep-space.ts:30

___

### rankingPoints

• **rankingPoints**: `number` = `0`

#### Inherited from

DeepSpaceTracker.rankingPoints

#### Defined in

games/deep-space.ts:31

___

### results

• **results**: `Record`<`GamePieceStatus`, `Object`\>

status:number of pieces

#### Inherited from

DeepSpaceTracker.results

#### Defined in

games/deep-space.ts:28

___

### type

• **type**: `GamePiece`

#### Inherited from

DeepSpaceTracker.type

#### Defined in

games/deep-space.ts:26

## Accessors

### totalPoints

• `get` **totalPoints**(): `number`

Returns the total number of points scored

#### Returns

`number`

#### Inherited from

DeepSpaceTracker.totalPoints

#### Defined in

games/deep-space.ts:48
