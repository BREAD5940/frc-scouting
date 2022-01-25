[@bread5940/frc-scouting](../README.md) / [Exports](../modules.md) / [InfiniteRecharge](../modules/InfiniteRecharge.md) / InfiniteRechargeMatch

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
- [crossedStartLineInAuto](InfiniteRecharge.InfiniteRechargeMatch.md#crossedstartlineinauto)
- [emergencyStopped](InfiniteRecharge.InfiniteRechargeMatch.md#emergencystopped)
- [fouls](InfiniteRecharge.InfiniteRechargeMatch.md#fouls)
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

[games/infinite-recharge/index.ts:149](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/games/infinite-recharge/index.ts#L149)

## Properties

### alliance

• `Readonly` **alliance**: [`Alliance`](../modules.md#alliance)

#### Inherited from

[Match](Match.md).[alliance](Match.md#alliance)

#### Defined in

[match.ts:49](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L49)

___

### bonusPoints

• `Readonly` **bonusPoints**: `number`

#### Inherited from

[Match](Match.md).[bonusPoints](Match.md#bonuspoints)

#### Defined in

[match.ts:60](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L60)

___

### borked

• `Readonly` **borked**: `boolean`

#### Inherited from

[Match](Match.md).[borked](Match.md#borked)

#### Defined in

[match.ts:56](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L56)

___

### cards

• `Readonly` **cards**: `Cards`

#### Inherited from

[Match](Match.md).[cards](Match.md#cards)

#### Defined in

[match.ts:54](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L54)

___

### crossedStartLineInAuto

• `Readonly` **crossedStartLineInAuto**: `boolean`

#### Inherited from

[Match](Match.md).[crossedStartLineInAuto](Match.md#crossedstartlineinauto)

#### Defined in

[match.ts:61](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L61)

___

### emergencyStopped

• `Readonly` **emergencyStopped**: `boolean`

#### Inherited from

[Match](Match.md).[emergencyStopped](Match.md#emergencystopped)

#### Defined in

[match.ts:55](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L55)

___

### fouls

• `Readonly` **fouls**: `Fouls`

#### Inherited from

[Match](Match.md).[fouls](Match.md#fouls)

#### Defined in

[match.ts:53](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L53)

___

### nonPieceTrackerRankingPoints

• `Readonly` **nonPieceTrackerRankingPoints**: `number`

#### Inherited from

[Match](Match.md).[nonPieceTrackerRankingPoints](Match.md#nonpiecetrackerrankingpoints)

#### Defined in

[match.ts:58](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L58)

___

### number

• `Readonly` **number**: `number`

#### Inherited from

[Match](Match.md).[number](Match.md#number)

#### Defined in

[match.ts:48](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L48)

___

### pieceTrackers

• **pieceTrackers**: [[`PowerCellTracker`](InfiniteRecharge.PowerCellTracker.md), [`ColorWheel`](InfiniteRecharge.ColorWheel.md), [`ShieldGenerator`](InfiniteRecharge.ShieldGenerator.md)]

#### Overrides

[Match](Match.md).[pieceTrackers](Match.md#piecetrackers)

#### Defined in

[games/infinite-recharge/index.ts:146](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/games/infinite-recharge/index.ts#L146)

___

### pointsFromFouls

• `Readonly` **pointsFromFouls**: `number`

#### Inherited from

[Match](Match.md).[pointsFromFouls](Match.md#pointsfromfouls)

#### Defined in

[match.ts:59](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L59)

___

### teamNumber

• `Readonly` **teamNumber**: `number`

#### Inherited from

[Match](Match.md).[teamNumber](Match.md#teamnumber)

#### Defined in

[match.ts:45](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L45)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Match](Match.md).[type](Match.md#type)

#### Defined in

[match.ts:47](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L47)

## Accessors

### points

• `get` **points**(): `number`

Gets the total number of points scored in a match

#### Returns

`number`

#### Inherited from

Match.points

#### Defined in

[match.ts:86](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L86)

___

### rankingPoints

• `get` **rankingPoints**(): `number`

Gets ranking points

#### Returns

`number`

#### Inherited from

Match.rankingPoints

#### Defined in

[match.ts:96](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L96)
