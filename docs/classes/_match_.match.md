**[frc-scouting](../README.md)**

> [Globals](../globals.md) / ["match"](../modules/_match_.md) / Match

# Class: Match

Represents an FRC match. Is extended by each FRC game.

## Hierarchy

* **Match**

  ↳ [DeepSpaceMatch](_games_deep_space_.deepspacematch.md)

  ↳ [MatchTemplate](_storage_json_.matchtemplate.md)

## Index

### Constructors

* [constructor](_match_.match.md#constructor)

### Properties

* [alliance](_match_.match.md#alliance)
* [bonusPoints](_match_.match.md#bonuspoints)
* [borked](_match_.match.md#borked)
* [cards](_match_.match.md#cards)
* [emergencyStopped](_match_.match.md#emergencystopped)
* [fouls](_match_.match.md#fouls)
* [number](_match_.match.md#number)
* [pieceTrackers](_match_.match.md#piecetrackers)
* [pointsFromFouls](_match_.match.md#pointsfromfouls)
* [rankingPoints](_match_.match.md#rankingpoints)
* [teamNumber](_match_.match.md#teamnumber)
* [type](_match_.match.md#type)

### Accessors

* [points](_match_.match.md#points)

## Constructors

### constructor

\+ **new Match**(`teamNumber`: number, `type`: string, `number`: number, `alliance`: [Alliance](../modules/_match_.md#alliance), `trackers`: [GamePieceTracker](_match_.gamepiecetracker.md)[], `data`: Partial\<[MatchData](../interfaces/_match_.matchdata.md)>): [Match](_match_.match.md)

*Defined in match.ts:55*

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

*Defined in match.ts:44*

___

### bonusPoints

• `Readonly` **bonusPoints**: number

*Defined in match.ts:55*

___

### borked

• `Readonly` **borked**: boolean

*Defined in match.ts:51*

___

### cards

• `Readonly` **cards**: [Cards](../interfaces/_match_.cards.md)

*Defined in match.ts:49*

___

### emergencyStopped

• `Readonly` **emergencyStopped**: boolean

*Defined in match.ts:50*

___

### fouls

• `Readonly` **fouls**: [Fouls](../interfaces/_match_.fouls.md)

*Defined in match.ts:48*

___

### number

• `Readonly` **number**: number

*Defined in match.ts:43*

___

### pieceTrackers

• `Readonly` **pieceTrackers**: [GamePieceTracker](_match_.gamepiecetracker.md)[]

*Defined in match.ts:46*

___

### pointsFromFouls

• `Readonly` **pointsFromFouls**: number

*Defined in match.ts:54*

___

### rankingPoints

• `Readonly` **rankingPoints**: number

*Defined in match.ts:53*

___

### teamNumber

• `Readonly` **teamNumber**: number

*Defined in match.ts:40*

___

### type

• `Readonly` **type**: string

*Defined in match.ts:42*

## Accessors

### points

• get **points**(): number

*Defined in match.ts:79*

Gets the total number of points scored in a match

**Returns:** number
