[frc-scouting](../README.md) / [Exports](../modules.md) / Match

# Class: Match

Represents an FRC match. Is extended by each FRC game.

## Hierarchy

- **`Match`**

  ↳ [`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)

  ↳ [`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)

  ↳ [`RapidReactMatch`](RapidReact.RapidReactMatch.md)

## Table of contents

### Constructors

- [constructor](Match.md#constructor)

### Properties

- [alliance](Match.md#alliance)
- [bonusPoints](Match.md#bonuspoints)
- [borked](Match.md#borked)
- [cards](Match.md#cards)
- [comments](Match.md#comments)
- [crossedStartLineInAuto](Match.md#crossedstartlineinauto)
- [defended](Match.md#defended)
- [emergencyStopped](Match.md#emergencystopped)
- [fouls](Match.md#fouls)
- [noShow](Match.md#noshow)
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

[match.ts:72](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L72)

## Properties

### alliance

• `Readonly` **alliance**: [`Alliance`](../modules.md#alliance)

#### Defined in

[match.ts:53](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L53)

___

### bonusPoints

• `Readonly` **bonusPoints**: `number`

#### Defined in

[match.ts:64](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L64)

___

### borked

• `Readonly` **borked**: `boolean`

#### Defined in

[match.ts:60](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L60)

___

### cards

• `Readonly` **cards**: `Cards`

#### Defined in

[match.ts:58](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L58)

___

### comments

• `Readonly` **comments**: `string`

#### Defined in

[match.ts:67](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L67)

___

### crossedStartLineInAuto

• `Readonly` **crossedStartLineInAuto**: `boolean`

#### Defined in

[match.ts:65](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L65)

___

### defended

• `Readonly` **defended**: `boolean`

#### Defined in

[match.ts:68](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L68)

___

### emergencyStopped

• `Readonly` **emergencyStopped**: `boolean`

#### Defined in

[match.ts:59](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L59)

___

### fouls

• `Readonly` **fouls**: `Fouls`

#### Defined in

[match.ts:57](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L57)

___

### noShow

• `Readonly` **noShow**: `boolean`

#### Defined in

[match.ts:69](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L69)

___

### nonPieceTrackerRankingPoints

• `Readonly` **nonPieceTrackerRankingPoints**: `number`

#### Defined in

[match.ts:62](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L62)

___

### number

• `Readonly` **number**: `number`

#### Defined in

[match.ts:52](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L52)

___

### pieceTrackers

• `Readonly` **pieceTrackers**: [`GamePieceTracker`](GamePieceTracker.md)[]

#### Defined in

[match.ts:55](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L55)

___

### pointsFromFouls

• `Readonly` **pointsFromFouls**: `number`

#### Defined in

[match.ts:63](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L63)

___

### teamNumber

• `Readonly` **teamNumber**: `number`

#### Defined in

[match.ts:49](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L49)

___

### type

• `Readonly` **type**: `string`

#### Defined in

[match.ts:51](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L51)

## Accessors

### points

• `get` **points**(): `number`

Gets the total number of points scored in a match

#### Returns

`number`

#### Defined in

[match.ts:98](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L98)

___

### rankingPoints

• `get` **rankingPoints**(): `number`

Gets ranking points

#### Returns

`number`

#### Defined in

[match.ts:108](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L108)
