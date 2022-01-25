[@bread5940/frc-scouting](../README.md) / [Exports](../modules.md) / Match

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

[match.ts:64](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L64)

## Properties

### alliance

• `Readonly` **alliance**: [`Alliance`](../modules.md#alliance)

#### Defined in

[match.ts:49](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L49)

___

### bonusPoints

• `Readonly` **bonusPoints**: `number`

#### Defined in

[match.ts:60](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L60)

___

### borked

• `Readonly` **borked**: `boolean`

#### Defined in

[match.ts:56](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L56)

___

### cards

• `Readonly` **cards**: `Cards`

#### Defined in

[match.ts:54](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L54)

___

### crossedStartLineInAuto

• `Readonly` **crossedStartLineInAuto**: `boolean`

#### Defined in

[match.ts:61](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L61)

___

### emergencyStopped

• `Readonly` **emergencyStopped**: `boolean`

#### Defined in

[match.ts:55](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L55)

___

### fouls

• `Readonly` **fouls**: `Fouls`

#### Defined in

[match.ts:53](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L53)

___

### nonPieceTrackerRankingPoints

• `Readonly` **nonPieceTrackerRankingPoints**: `number`

#### Defined in

[match.ts:58](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L58)

___

### number

• `Readonly` **number**: `number`

#### Defined in

[match.ts:48](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L48)

___

### pieceTrackers

• `Readonly` **pieceTrackers**: [`GamePieceTracker`](GamePieceTracker.md)[]

#### Defined in

[match.ts:51](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L51)

___

### pointsFromFouls

• `Readonly` **pointsFromFouls**: `number`

#### Defined in

[match.ts:59](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L59)

___

### teamNumber

• `Readonly` **teamNumber**: `number`

#### Defined in

[match.ts:45](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L45)

___

### type

• `Readonly` **type**: `string`

#### Defined in

[match.ts:47](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L47)

## Accessors

### points

• `get` **points**(): `number`

Gets the total number of points scored in a match

#### Returns

`number`

#### Defined in

[match.ts:86](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L86)

___

### rankingPoints

• `get` **rankingPoints**(): `number`

Gets ranking points

#### Returns

`number`

#### Defined in

[match.ts:96](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/match.ts#L96)
