**[frc-scouting](../README.md)**

> [Globals](../globals.md) / ["storage/json"](../modules/_storage_json_.md) / MatchTemplate

# Class: MatchTemplate

A template match to be hackily overloaded with JSON data

## Hierarchy

* [Match](_match_.match.md)

  ↳ **MatchTemplate**

## Index

### Constructors

* [constructor](_storage_json_.matchtemplate.md#constructor)

### Properties

* [alliance](_storage_json_.matchtemplate.md#alliance)
* [bonusPoints](_storage_json_.matchtemplate.md#bonuspoints)
* [borked](_storage_json_.matchtemplate.md#borked)
* [cards](_storage_json_.matchtemplate.md#cards)
* [emergencyStopped](_storage_json_.matchtemplate.md#emergencystopped)
* [fouls](_storage_json_.matchtemplate.md#fouls)
* [number](_storage_json_.matchtemplate.md#number)
* [pieceTrackers](_storage_json_.matchtemplate.md#piecetrackers)
* [pointsFromFouls](_storage_json_.matchtemplate.md#pointsfromfouls)
* [rankingPoints](_storage_json_.matchtemplate.md#rankingpoints)
* [teamNumber](_storage_json_.matchtemplate.md#teamnumber)
* [type](_storage_json_.matchtemplate.md#type)

### Accessors

* [points](_storage_json_.matchtemplate.md#points)

## Constructors

### constructor

\+ **new MatchTemplate**(`teamNumber`: number, `type`: string, `number`: number, `alliance`: [Alliance](../modules/_match_.md#alliance), `trackers`: [GamePieceTracker](_match_.gamepiecetracker.md)[], `data`: Partial\<[MatchData](../interfaces/_match_.matchdata.md)>): [MatchTemplate](_storage_json_.matchtemplate.md)

*Inherited from [Match](_match_.match.md).[constructor](_match_.match.md#constructor)*

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

**Returns:** [MatchTemplate](_storage_json_.matchtemplate.md)

## Properties

### alliance

• `Readonly` **alliance**: [Alliance](../modules/_match_.md#alliance)

*Inherited from [Match](_match_.match.md).[alliance](_match_.match.md#alliance)*

*Defined in match.ts:44*

___

### bonusPoints

• `Readonly` **bonusPoints**: number

*Inherited from [Match](_match_.match.md).[bonusPoints](_match_.match.md#bonuspoints)*

*Defined in match.ts:55*

___

### borked

• `Readonly` **borked**: boolean

*Inherited from [Match](_match_.match.md).[borked](_match_.match.md#borked)*

*Defined in match.ts:51*

___

### cards

• `Readonly` **cards**: [Cards](../interfaces/_match_.cards.md)

*Inherited from [Match](_match_.match.md).[cards](_match_.match.md#cards)*

*Defined in match.ts:49*

___

### emergencyStopped

• `Readonly` **emergencyStopped**: boolean

*Inherited from [Match](_match_.match.md).[emergencyStopped](_match_.match.md#emergencystopped)*

*Defined in match.ts:50*

___

### fouls

• `Readonly` **fouls**: [Fouls](../interfaces/_match_.fouls.md)

*Inherited from [Match](_match_.match.md).[fouls](_match_.match.md#fouls)*

*Defined in match.ts:48*

___

### number

• `Readonly` **number**: number

*Inherited from [Match](_match_.match.md).[number](_match_.match.md#number)*

*Defined in match.ts:43*

___

### pieceTrackers

• `Readonly` **pieceTrackers**: [GamePieceTracker](_match_.gamepiecetracker.md)[]

*Inherited from [Match](_match_.match.md).[pieceTrackers](_match_.match.md#piecetrackers)*

*Defined in match.ts:46*

___

### pointsFromFouls

• `Readonly` **pointsFromFouls**: number

*Inherited from [Match](_match_.match.md).[pointsFromFouls](_match_.match.md#pointsfromfouls)*

*Defined in match.ts:54*

___

### rankingPoints

• `Readonly` **rankingPoints**: number

*Inherited from [Match](_match_.match.md).[rankingPoints](_match_.match.md#rankingpoints)*

*Defined in match.ts:53*

___

### teamNumber

• `Readonly` **teamNumber**: number

*Inherited from [Match](_match_.match.md).[teamNumber](_match_.match.md#teamnumber)*

*Defined in match.ts:40*

___

### type

• `Readonly` **type**: string

*Inherited from [Match](_match_.match.md).[type](_match_.match.md#type)*

*Defined in match.ts:42*

## Accessors

### points

• get **points**(): number

*Inherited from [Match](_match_.match.md).[points](_match_.match.md#points)*

*Defined in match.ts:79*

Gets the total number of points scored in a match

**Returns:** number
