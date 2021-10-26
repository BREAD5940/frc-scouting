[frc-scouting](../README.md) / [Exports](../modules.md) / [DeepSpace](../modules/DeepSpace.md) / DeepSpaceMatch

# Class: DeepSpaceMatch

[DeepSpace](../modules/DeepSpace.md).DeepSpaceMatch

Represents a Deep Space match

## Hierarchy

- [`Match`](Match.md)

  ↳ **`DeepSpaceMatch`**

## Table of contents

### Constructors

- [constructor](DeepSpace.DeepSpaceMatch.md#constructor)

### Properties

- [alliance](DeepSpace.DeepSpaceMatch.md#alliance)
- [bonusPoints](DeepSpace.DeepSpaceMatch.md#bonuspoints)
- [borked](DeepSpace.DeepSpaceMatch.md#borked)
- [cards](DeepSpace.DeepSpaceMatch.md#cards)
- [crossedStartLineInAuto](DeepSpace.DeepSpaceMatch.md#crossedstartlineinauto)
- [crossesStartLine](DeepSpace.DeepSpaceMatch.md#crossesstartline)
- [emergencyStopped](DeepSpace.DeepSpaceMatch.md#emergencystopped)
- [finalHABLevel](DeepSpace.DeepSpaceMatch.md#finalhablevel)
- [fouls](DeepSpace.DeepSpaceMatch.md#fouls)
- [helpsOthersHABClimb](DeepSpace.DeepSpaceMatch.md#helpsothershabclimb)
- [initialHABLevel](DeepSpace.DeepSpaceMatch.md#initialhablevel)
- [nonPieceTrackerRankingPoints](DeepSpace.DeepSpaceMatch.md#nonpiecetrackerrankingpoints)
- [number](DeepSpace.DeepSpaceMatch.md#number)
- [pieceTrackers](DeepSpace.DeepSpaceMatch.md#piecetrackers)
- [pointsFromFouls](DeepSpace.DeepSpaceMatch.md#pointsfromfouls)
- [rankingPointRecord](DeepSpace.DeepSpaceMatch.md#rankingpointrecord)
- [rocketsAssembled](DeepSpace.DeepSpaceMatch.md#rocketsassembled)
- [teamNumber](DeepSpace.DeepSpaceMatch.md#teamnumber)
- [type](DeepSpace.DeepSpaceMatch.md#type)

### Accessors

- [points](DeepSpace.DeepSpaceMatch.md#points)
- [rankingPoints](DeepSpace.DeepSpaceMatch.md#rankingpoints)

## Constructors

### constructor

• **new DeepSpaceMatch**(`teamNumber`, `type`, `number`, `alliance`, `data`)

Creates a new DeepSpaceMatch

#### Parameters

| Name | Type |
| :------ | :------ |
| `teamNumber` | `number` |
| `type` | `string` |
| `number` | `number` |
| `alliance` | [`Alliance`](../modules.md#alliance) |
| `data` | `Partial`<`DeepSpaceMatchData`\> & { `initialHABLevel`: `HABLevel`  } |

#### Overrides

[Match](Match.md).[constructor](Match.md#constructor)

#### Defined in

games/deep-space.ts:107

## Properties

### alliance

• `Readonly` **alliance**: [`Alliance`](../modules.md#alliance)

#### Inherited from

[Match](Match.md).[alliance](Match.md#alliance)

#### Defined in

match.ts:47

___

### bonusPoints

• `Readonly` **bonusPoints**: `number`

#### Inherited from

[Match](Match.md).[bonusPoints](Match.md#bonuspoints)

#### Defined in

match.ts:58

___

### borked

• `Readonly` **borked**: `boolean`

#### Inherited from

[Match](Match.md).[borked](Match.md#borked)

#### Defined in

match.ts:54

___

### cards

• `Readonly` **cards**: `Cards`

#### Inherited from

[Match](Match.md).[cards](Match.md#cards)

#### Defined in

match.ts:52

___

### crossedStartLineInAuto

• `Readonly` **crossedStartLineInAuto**: `boolean`

#### Inherited from

[Match](Match.md).[crossedStartLineInAuto](Match.md#crossedstartlineinauto)

#### Defined in

match.ts:59

___

### crossesStartLine

• **crossesStartLine**: `boolean`

#### Defined in

games/deep-space.ts:98

___

### emergencyStopped

• `Readonly` **emergencyStopped**: `boolean`

#### Inherited from

[Match](Match.md).[emergencyStopped](Match.md#emergencystopped)

#### Defined in

match.ts:53

___

### finalHABLevel

• **finalHABLevel**: `HABLevel`

#### Defined in

games/deep-space.ts:97

___

### fouls

• `Readonly` **fouls**: `Fouls`

#### Inherited from

[Match](Match.md).[fouls](Match.md#fouls)

#### Defined in

match.ts:51

___

### helpsOthersHABClimb

• **helpsOthersHABClimb**: `boolean`

#### Defined in

games/deep-space.ts:95

___

### initialHABLevel

• **initialHABLevel**: `HABLevel`

#### Defined in

games/deep-space.ts:96

___

### nonPieceTrackerRankingPoints

• `Readonly` **nonPieceTrackerRankingPoints**: `number`

#### Overrides

[Match](Match.md).[nonPieceTrackerRankingPoints](Match.md#nonpiecetrackerrankingpoints)

#### Defined in

games/deep-space.ts:105

___

### number

• `Readonly` **number**: `number`

#### Inherited from

[Match](Match.md).[number](Match.md#number)

#### Defined in

match.ts:46

___

### pieceTrackers

• **pieceTrackers**: [[`CargoTracker`](DeepSpace.CargoTracker.md), [`HatchPanelTracker`](DeepSpace.HatchPanelTracker.md)]

#### Overrides

[Match](Match.md).[pieceTrackers](Match.md#piecetrackers)

#### Defined in

games/deep-space.ts:93

___

### pointsFromFouls

• `Readonly` **pointsFromFouls**: `number`

#### Inherited from

[Match](Match.md).[pointsFromFouls](Match.md#pointsfromfouls)

#### Defined in

match.ts:57

___

### rankingPointRecord

• **rankingPointRecord**: `Record`<`RankingPoints`, `boolean`\>

point:isGained

#### Defined in

games/deep-space.ts:103

___

### rocketsAssembled

• **rocketsAssembled**: `Record`<`Rocket`, `boolean`\>

rocket:isAssembled

#### Defined in

games/deep-space.ts:101

___

### teamNumber

• `Readonly` **teamNumber**: `number`

#### Inherited from

[Match](Match.md).[teamNumber](Match.md#teamnumber)

#### Defined in

match.ts:43

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Match](Match.md).[type](Match.md#type)

#### Defined in

match.ts:45

## Accessors

### points

• `get` **points**(): `number`

Gets the total number of points scored in a match

#### Returns

`number`

#### Inherited from

Match.points

#### Defined in

match.ts:84

___

### rankingPoints

• `get` **rankingPoints**(): `number`

Gets ranking points

#### Returns

`number`

#### Inherited from

Match.rankingPoints

#### Defined in

match.ts:94
