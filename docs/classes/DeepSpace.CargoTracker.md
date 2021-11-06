[@bread5940/frc-scouting](../README.md) / [Exports](../modules.md) / [DeepSpace](../modules/DeepSpace.md) / CargoTracker

# Class: CargoTracker

[DeepSpace](../modules/DeepSpace.md).CargoTracker

Tracks cargo pieces

## Hierarchy

- `DeepSpaceTracker`

  ↳ **`CargoTracker`**

## Table of contents

### Constructors

- [constructor](DeepSpace.CargoTracker.md#constructor)

### Properties

- [baseValue](DeepSpace.CargoTracker.md#basevalue)
- [rankingPoints](DeepSpace.CargoTracker.md#rankingpoints)
- [results](DeepSpace.CargoTracker.md#results)
- [type](DeepSpace.CargoTracker.md#type)

### Accessors

- [totalPoints](DeepSpace.CargoTracker.md#totalpoints)

## Constructors

### constructor

• **new CargoTracker**(`results`)

Creates a new CargoTracker

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | `Record`<`GamePieceStatus`, `Object`\> |

#### Overrides

DeepSpaceTracker.constructor

#### Defined in

games/deep-space.ts:63

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
