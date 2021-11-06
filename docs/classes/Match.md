[@bread5940/frc-scouting](../README.md) / [Exports](../modules.md) / Match

# Class: Match

Represents an FRC match. Is extended by each FRC game.

## Hierarchy

- **`Match`**

  ↳ [`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)

  ↳ [`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)

## Table of contents

### Constructors

- [constructor](Match.md#constructor)

### Properties

- [alliance](Match.md#alliance)
- [bonusPoints](Match.md#bonuspoints)
- [borked](Match.md#borked)
- [cards](Match.md#cards)
- [crossedStartLineInAuto](Match.md#crossedstartlineinauto)
- [emergencyStopped](Match.md#emergencystopped)
- [fouls](Match.md#fouls)
- [nonPieceTrackerRankingPoints](Match.md#nonpiecetrackerrankingpoints)
- [number](Match.md#number)
- [pieceTrackers](Match.md#piecetrackers)
- [pointsFromFouls](Match.md#pointsfromfouls)
- [teamNumber](Match.md#teamnumber)
- [type](Match.md#type)

### Accessors

- [points](Match.md#points)
- [rankingPoints](Match.md#rankingpoints)

## Constructors

### constructor

• **new Match**(`teamNumber`, `type`, `number`, `alliance`, `trackers`, `data`)

Creates a new Match

#### Parameters

| Name | Type |
| :------ | :------ |
| `teamNumber` | `number` |
| `type` | `string` |
| `number` | `number` |
| `alliance` | [`Alliance`](../modules.md#alliance) |
| `trackers` | [`GamePieceTracker`](GamePieceTracker.md)[] |
| `data` | `Partial`<[`MatchData`](../interfaces/MatchData.md)\> |

#### Defined in

match.ts:62

## Properties

### alliance

• `Readonly` **alliance**: [`Alliance`](../modules.md#alliance)

#### Defined in

match.ts:47

___

### bonusPoints

• `Readonly` **bonusPoints**: `number`

#### Defined in

match.ts:58

___

### borked

• `Readonly` **borked**: `boolean`

#### Defined in

match.ts:54

___

### cards

• `Readonly` **cards**: `Cards`

#### Defined in

match.ts:52

___

### crossedStartLineInAuto

• `Readonly` **crossedStartLineInAuto**: `boolean`

#### Defined in

match.ts:59

___

### emergencyStopped

• `Readonly` **emergencyStopped**: `boolean`

#### Defined in

match.ts:53

___

### fouls

• `Readonly` **fouls**: `Fouls`

#### Defined in

match.ts:51

___

### nonPieceTrackerRankingPoints

• `Readonly` **nonPieceTrackerRankingPoints**: `number`

#### Defined in

match.ts:56

___

### number

• `Readonly` **number**: `number`

#### Defined in

match.ts:46

___

### pieceTrackers

• `Readonly` **pieceTrackers**: [`GamePieceTracker`](GamePieceTracker.md)[]

#### Defined in

match.ts:49

___

### pointsFromFouls

• `Readonly` **pointsFromFouls**: `number`

#### Defined in

match.ts:57

___

### teamNumber

• `Readonly` **teamNumber**: `number`

#### Defined in

match.ts:43

___

### type

• `Readonly` **type**: `string`

#### Defined in

match.ts:45

## Accessors

### points

• `get` **points**(): `number`

Gets the total number of points scored in a match

#### Returns

`number`

#### Defined in

match.ts:84

___

### rankingPoints

• `get` **rankingPoints**(): `number`

Gets ranking points

#### Returns

`number`

#### Defined in

match.ts:94
