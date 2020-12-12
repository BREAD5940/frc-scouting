**[@theannalyst/frc-scouting](../README.md)**

> [Globals](../globals.md) / ["match"](../modules/_match_.md) / Match

# Class: Match

Represents an FRC match. Is extended by each FRC game.

## Hierarchy

* **Match**

  ↳ [DeepSpaceMatch](_games_deep_space_.deepspacematch.md)

  ↳ [InfiniteRechargeMatch](_games_infinite_recharge_.infiniterechargematch.md)

  ↳ [MatchTemplate](_storage_json_.matchtemplate.md)

## Index

### Constructors

* [constructor](_match_.match.md#constructor)

### Properties

* [alliance](_match_.match.md#alliance)
* [bonusPoints](_match_.match.md#bonuspoints)
* [borked](_match_.match.md#borked)
* [cards](_match_.match.md#cards)
* [crossedStartLineInAuto](_match_.match.md#crossedstartlineinauto)
* [emergencyStopped](_match_.match.md#emergencystopped)
* [fouls](_match_.match.md#fouls)
* [nonPieceTrackerRankingPoints](_match_.match.md#nonpiecetrackerrankingpoints)
* [number](_match_.match.md#number)
* [pieceTrackers](_match_.match.md#piecetrackers)
* [pointsFromFouls](_match_.match.md#pointsfromfouls)
* [teamNumber](_match_.match.md#teamnumber)
* [type](_match_.match.md#type)

### Accessors

* [points](_match_.match.md#points)
* [rankingPoints](_match_.match.md#rankingpoints)

## Constructors

### constructor

\+ **new Match**(`teamNumber`: number, `type`: string, `number`: number, `alliance`: [Alliance](../modules/_match_.md#alliance), `trackers`: [GamePieceTracker](_match_.gamepiecetracker.md)[], `data`: Partial\<[MatchData](../interfaces/_match_.matchdata.md)>): [Match](_match_.match.md)

*Defined in match.ts:59*

Creates a new Match

#### Parameters:

Name | Type |
------ | ------ |
`teamNumber` | number |
`type` | string |
`number` | number |
`alliance` | [Alliance](../modules/_match_.md#alliance) |
`trackers` | [GamePieceTracker](_match_.gamepiecetracker.md)[] |
`data` | Partial\<[MatchData](../interfaces/_match_.matchdata.md)> |

**Returns:** [Match](_match_.match.md)

## Properties

### alliance

• `Readonly` **alliance**: [Alliance](../modules/_match_.md#alliance)

*Defined in match.ts:47*

___

### bonusPoints

• `Readonly` **bonusPoints**: number

*Defined in match.ts:58*

___

### borked

• `Readonly` **borked**: boolean

*Defined in match.ts:54*

___

### cards

• `Readonly` **cards**: [Cards](../interfaces/_match_.cards.md)

*Defined in match.ts:52*

___

### crossedStartLineInAuto

• `Readonly` **crossedStartLineInAuto**: boolean

*Defined in match.ts:59*

___

### emergencyStopped

• `Readonly` **emergencyStopped**: boolean

*Defined in match.ts:53*

___

### fouls

• `Readonly` **fouls**: [Fouls](../interfaces/_match_.fouls.md)

*Defined in match.ts:51*

___

### nonPieceTrackerRankingPoints

• `Readonly` **nonPieceTrackerRankingPoints**: number

*Defined in match.ts:56*

___

### number

• `Readonly` **number**: number

*Defined in match.ts:46*

___

### pieceTrackers

• `Readonly` **pieceTrackers**: [GamePieceTracker](_match_.gamepiecetracker.md)[]

*Defined in match.ts:49*

___

### pointsFromFouls

• `Readonly` **pointsFromFouls**: number

*Defined in match.ts:57*

___

### teamNumber

• `Readonly` **teamNumber**: number

*Defined in match.ts:43*

___

### type

• `Readonly` **type**: string

*Defined in match.ts:45*

## Accessors

### points

• get **points**(): number

*Defined in match.ts:84*

Gets the total number of points scored in a match

**Returns:** number

___

### rankingPoints

• get **rankingPoints**(): number

*Defined in match.ts:94*

Gets ranking points

**Returns:** number
