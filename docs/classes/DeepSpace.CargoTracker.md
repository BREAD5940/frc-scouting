[frc-scouting](../README.md) / [Exports](../modules.md) / [DeepSpace](../modules/DeepSpace.md) / CargoTracker

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
| `results` | `Record`<`GamePieceStatus`, { `auto`: `number` ; `teleop`: `number`  }\> |

#### Overrides

DeepSpaceTracker.constructor

#### Defined in

[games/deep-space/index.ts:63](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/deep-space/index.ts#L63)

## Properties

### baseValue

• **baseValue**: `number`

doubled in auto

#### Inherited from

DeepSpaceTracker.baseValue

#### Defined in

[games/deep-space/index.ts:30](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/deep-space/index.ts#L30)

___

### rankingPoints

• **rankingPoints**: `number` = `0`

#### Inherited from

DeepSpaceTracker.rankingPoints

#### Defined in

[games/deep-space/index.ts:31](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/deep-space/index.ts#L31)

___

### results

• **results**: `Record`<`GamePieceStatus`, { `auto`: `number` ; `teleop`: `number`  }\>

status:number of pieces

#### Inherited from

DeepSpaceTracker.results

#### Defined in

[games/deep-space/index.ts:28](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/deep-space/index.ts#L28)

___

### type

• **type**: `GamePiece`

#### Inherited from

DeepSpaceTracker.type

#### Defined in

[games/deep-space/index.ts:26](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/deep-space/index.ts#L26)

## Accessors

### totalPoints

• `get` **totalPoints**(): `number`

Returns the total number of points scored

#### Returns

`number`

#### Inherited from

DeepSpaceTracker.totalPoints

#### Defined in

[games/deep-space/index.ts:48](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/deep-space/index.ts#L48)
