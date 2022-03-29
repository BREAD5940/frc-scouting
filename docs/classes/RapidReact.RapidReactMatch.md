[frc-scouting](../README.md) / [Exports](../modules.md) / [RapidReact](../modules/RapidReact.md) / RapidReactMatch

# Class: RapidReactMatch

[RapidReact](../modules/RapidReact.md).RapidReactMatch

Represents one robot's performance in a match of Rapid React

## Hierarchy

- [`Match`](Match.md)

  ↳ **`RapidReactMatch`**

## Table of contents

### Constructors

- [constructor](RapidReact.RapidReactMatch.md#constructor)

### Properties

- [alliance](RapidReact.RapidReactMatch.md#alliance)
- [bonusPoints](RapidReact.RapidReactMatch.md#bonuspoints)
- [borked](RapidReact.RapidReactMatch.md#borked)
- [cards](RapidReact.RapidReactMatch.md#cards)
- [comments](RapidReact.RapidReactMatch.md#comments)
- [crossedStartLineInAuto](RapidReact.RapidReactMatch.md#crossedstartlineinauto)
- [defended](RapidReact.RapidReactMatch.md#defended)
- [emergencyStopped](RapidReact.RapidReactMatch.md#emergencystopped)
- [fouls](RapidReact.RapidReactMatch.md#fouls)
- [noShow](RapidReact.RapidReactMatch.md#noshow)
- [nonPieceTrackerRankingPoints](RapidReact.RapidReactMatch.md#nonpiecetrackerrankingpoints)
- [number](RapidReact.RapidReactMatch.md#number)
- [pieceTrackers](RapidReact.RapidReactMatch.md#piecetrackers)
- [pointsFromFouls](RapidReact.RapidReactMatch.md#pointsfromfouls)
- [teamNumber](RapidReact.RapidReactMatch.md#teamnumber)
- [type](RapidReact.RapidReactMatch.md#type)

### Accessors

- [points](RapidReact.RapidReactMatch.md#points)
- [rankingPoints](RapidReact.RapidReactMatch.md#rankingpoints)

## Constructors

### constructor

• **new RapidReactMatch**(`teamNumber`, `type`, `number`, `alliance`, `data`)

creates a match

#### Parameters

| Name | Type |
| :------ | :------ |
| `teamNumber` | `number` |
| `type` | `string` |
| `number` | `number` |
| `alliance` | [`Alliance`](../modules.md#alliance) |
| `data` | `RapidReactMatchData` |

#### Overrides

[Match](Match.md).[constructor](Match.md#constructor)

#### Defined in

[games/rapid-react/index.ts:112](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/rapid-react/index.ts#L112)

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

• **pieceTrackers**: [`ShotTracker`, [`MonkeyBarTracker`](RapidReact.MonkeyBarTracker.md)]

#### Overrides

[Match](Match.md).[pieceTrackers](Match.md#piecetrackers)

#### Defined in

[games/rapid-react/index.ts:109](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/rapid-react/index.ts#L109)

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
