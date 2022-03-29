[frc-scouting](../README.md) / [Exports](../modules.md) / [InfiniteRecharge](../modules/InfiniteRecharge.md) / InfiniteRechargeMatch

# Class: InfiniteRechargeMatch

[InfiniteRecharge](../modules/InfiniteRecharge.md).InfiniteRechargeMatch

Represents an Infinite Recharge match

## Hierarchy

- [`Match`](Match.md)

  ↳ **`InfiniteRechargeMatch`**

## Table of contents

### Constructors

- [constructor](InfiniteRecharge.InfiniteRechargeMatch.md#constructor)

### Properties

- [alliance](InfiniteRecharge.InfiniteRechargeMatch.md#alliance)
- [bonusPoints](InfiniteRecharge.InfiniteRechargeMatch.md#bonuspoints)
- [borked](InfiniteRecharge.InfiniteRechargeMatch.md#borked)
- [cards](InfiniteRecharge.InfiniteRechargeMatch.md#cards)
- [comments](InfiniteRecharge.InfiniteRechargeMatch.md#comments)
- [crossedStartLineInAuto](InfiniteRecharge.InfiniteRechargeMatch.md#crossedstartlineinauto)
- [defended](InfiniteRecharge.InfiniteRechargeMatch.md#defended)
- [emergencyStopped](InfiniteRecharge.InfiniteRechargeMatch.md#emergencystopped)
- [fouls](InfiniteRecharge.InfiniteRechargeMatch.md#fouls)
- [noShow](InfiniteRecharge.InfiniteRechargeMatch.md#noshow)
- [nonPieceTrackerRankingPoints](InfiniteRecharge.InfiniteRechargeMatch.md#nonpiecetrackerrankingpoints)
- [number](InfiniteRecharge.InfiniteRechargeMatch.md#number)
- [pieceTrackers](InfiniteRecharge.InfiniteRechargeMatch.md#piecetrackers)
- [pointsFromFouls](InfiniteRecharge.InfiniteRechargeMatch.md#pointsfromfouls)
- [teamNumber](InfiniteRecharge.InfiniteRechargeMatch.md#teamnumber)
- [type](InfiniteRecharge.InfiniteRechargeMatch.md#type)

### Accessors

- [points](InfiniteRecharge.InfiniteRechargeMatch.md#points)
- [rankingPoints](InfiniteRecharge.InfiniteRechargeMatch.md#rankingpoints)

## Constructors

### constructor

• **new InfiniteRechargeMatch**(`teamNumber`, `type`, `number`, `alliance`, `data`)

creates a new InfiniteRechargeMatch

#### Parameters

| Name | Type |
| :------ | :------ |
| `teamNumber` | `number` |
| `type` | `string` |
| `number` | `number` |
| `alliance` | [`Alliance`](../modules.md#alliance) |
| `data` | `Partial`<`InfiniteRechargeMatchData`\> |

#### Overrides

[Match](Match.md).[constructor](Match.md#constructor)

#### Defined in

[games/infinite-recharge/index.ts:149](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/infinite-recharge/index.ts#L149)

## Properties

### alliance

• `Readonly` **alliance**: [`Alliance`](../modules.md#alliance)

#### Inherited from

[Match](Match.md).[alliance](Match.md#alliance)

#### Defined in

[match.ts:53](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L53)

___

### bonusPoints

• `Readonly` **bonusPoints**: `number`

#### Inherited from

[Match](Match.md).[bonusPoints](Match.md#bonuspoints)

#### Defined in

[match.ts:64](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L64)

___

### borked

• `Readonly` **borked**: `boolean`

#### Inherited from

[Match](Match.md).[borked](Match.md#borked)

#### Defined in

[match.ts:60](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L60)

___

### cards

• `Readonly` **cards**: `Cards`

#### Inherited from

[Match](Match.md).[cards](Match.md#cards)

#### Defined in

[match.ts:58](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L58)

___

### comments

• `Readonly` **comments**: `string`

#### Inherited from

[Match](Match.md).[comments](Match.md#comments)

#### Defined in

[match.ts:67](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L67)

___

### crossedStartLineInAuto

• `Readonly` **crossedStartLineInAuto**: `boolean`

#### Inherited from

[Match](Match.md).[crossedStartLineInAuto](Match.md#crossedstartlineinauto)

#### Defined in

[match.ts:65](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L65)

___

### defended

• `Readonly` **defended**: `boolean`

#### Inherited from

[Match](Match.md).[defended](Match.md#defended)

#### Defined in

[match.ts:68](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L68)

___

### emergencyStopped

• `Readonly` **emergencyStopped**: `boolean`

#### Inherited from

[Match](Match.md).[emergencyStopped](Match.md#emergencystopped)

#### Defined in

[match.ts:59](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L59)

___

### fouls

• `Readonly` **fouls**: `Fouls`

#### Inherited from

[Match](Match.md).[fouls](Match.md#fouls)

#### Defined in

[match.ts:57](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L57)

___

### noShow

• `Readonly` **noShow**: `boolean`

#### Inherited from

[Match](Match.md).[noShow](Match.md#noshow)

#### Defined in

[match.ts:69](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L69)

___

### nonPieceTrackerRankingPoints

• `Readonly` **nonPieceTrackerRankingPoints**: `number`

#### Inherited from

[Match](Match.md).[nonPieceTrackerRankingPoints](Match.md#nonpiecetrackerrankingpoints)

#### Defined in

[match.ts:62](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L62)

___

### number

• `Readonly` **number**: `number`

#### Inherited from

[Match](Match.md).[number](Match.md#number)

#### Defined in

[match.ts:52](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L52)

___

### pieceTrackers

• **pieceTrackers**: [[`PowerCellTracker`](InfiniteRecharge.PowerCellTracker.md), [`ColorWheel`](InfiniteRecharge.ColorWheel.md), [`ShieldGenerator`](InfiniteRecharge.ShieldGenerator.md)]

#### Overrides

[Match](Match.md).[pieceTrackers](Match.md#piecetrackers)

#### Defined in

[games/infinite-recharge/index.ts:146](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/infinite-recharge/index.ts#L146)

___

### pointsFromFouls

• `Readonly` **pointsFromFouls**: `number`

#### Inherited from

[Match](Match.md).[pointsFromFouls](Match.md#pointsfromfouls)

#### Defined in

[match.ts:63](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L63)

___

### teamNumber

• `Readonly` **teamNumber**: `number`

#### Inherited from

[Match](Match.md).[teamNumber](Match.md#teamnumber)

#### Defined in

[match.ts:49](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L49)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Match](Match.md).[type](Match.md#type)

#### Defined in

[match.ts:51](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L51)

## Accessors

### points

• `get` **points**(): `number`

Gets the total number of points scored in a match

#### Returns

`number`

#### Inherited from

Match.points

#### Defined in

[match.ts:98](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L98)

___

### rankingPoints

• `get` **rankingPoints**(): `number`

Gets ranking points

#### Returns

`number`

#### Inherited from

Match.rankingPoints

#### Defined in

[match.ts:108](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/match.ts#L108)
