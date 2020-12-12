**[@theannalyst/frc-scouting](../README.md)**

> [Globals](../globals.md) / ["games/infinite-recharge"](../modules/_games_infinite_recharge_.md) / InfiniteRechargeMatch

# Class: InfiniteRechargeMatch

Represents an Infinite Recharge match

## Hierarchy

* [Match](_match_.match.md)

  ↳ **InfiniteRechargeMatch**

## Index

### Constructors

* [constructor](_games_infinite_recharge_.infiniterechargematch.md#constructor)

### Properties

* [alliance](_games_infinite_recharge_.infiniterechargematch.md#alliance)
* [bonusPoints](_games_infinite_recharge_.infiniterechargematch.md#bonuspoints)
* [borked](_games_infinite_recharge_.infiniterechargematch.md#borked)
* [cards](_games_infinite_recharge_.infiniterechargematch.md#cards)
* [crossedStartLineInAuto](_games_infinite_recharge_.infiniterechargematch.md#crossedstartlineinauto)
* [emergencyStopped](_games_infinite_recharge_.infiniterechargematch.md#emergencystopped)
* [fouls](_games_infinite_recharge_.infiniterechargematch.md#fouls)
* [nonPieceTrackerRankingPoints](_games_infinite_recharge_.infiniterechargematch.md#nonpiecetrackerrankingpoints)
* [number](_games_infinite_recharge_.infiniterechargematch.md#number)
* [pieceTrackers](_games_infinite_recharge_.infiniterechargematch.md#piecetrackers)
* [pointsFromFouls](_games_infinite_recharge_.infiniterechargematch.md#pointsfromfouls)
* [teamNumber](_games_infinite_recharge_.infiniterechargematch.md#teamnumber)
* [type](_games_infinite_recharge_.infiniterechargematch.md#type)

### Accessors

* [points](_games_infinite_recharge_.infiniterechargematch.md#points)
* [rankingPoints](_games_infinite_recharge_.infiniterechargematch.md#rankingpoints)

## Constructors

### constructor

\+ **new InfiniteRechargeMatch**(`teamNumber`: number, `type`: string, `number`: number, `alliance`: [Alliance](../modules/_match_.md#alliance), `data`: Partial\<[InfiniteRechargeMatchData](../interfaces/_games_infinite_recharge_.infiniterechargematchdata.md)>): [InfiniteRechargeMatch](_games_infinite_recharge_.infiniterechargematch.md)

*Overrides [Match](_match_.match.md).[constructor](_match_.match.md#constructor)*

*Defined in games/infinite-recharge.ts:145*

creates a new InfiniteRechargeMatch

#### Parameters:

Name | Type |
------ | ------ |
`teamNumber` | number |
`type` | string |
`number` | number |
`alliance` | [Alliance](../modules/_match_.md#alliance) |
`data` | Partial\<[InfiniteRechargeMatchData](../interfaces/_games_infinite_recharge_.infiniterechargematchdata.md)> |

**Returns:** [InfiniteRechargeMatch](_games_infinite_recharge_.infiniterechargematch.md)

## Properties

### alliance

• `Readonly` **alliance**: [Alliance](../modules/_match_.md#alliance)

*Inherited from [Match](_match_.match.md).[alliance](_match_.match.md#alliance)*

*Defined in match.ts:47*

___

### bonusPoints

• `Readonly` **bonusPoints**: number

*Inherited from [Match](_match_.match.md).[bonusPoints](_match_.match.md#bonuspoints)*

*Defined in match.ts:58*

___

### borked

• `Readonly` **borked**: boolean

*Inherited from [Match](_match_.match.md).[borked](_match_.match.md#borked)*

*Defined in match.ts:54*

___

### cards

• `Readonly` **cards**: [Cards](../interfaces/_match_.cards.md)

*Inherited from [Match](_match_.match.md).[cards](_match_.match.md#cards)*

*Defined in match.ts:52*

___

### crossedStartLineInAuto

• `Readonly` **crossedStartLineInAuto**: boolean

*Inherited from [Match](_match_.match.md).[crossedStartLineInAuto](_match_.match.md#crossedstartlineinauto)*

*Defined in match.ts:59*

___

### emergencyStopped

• `Readonly` **emergencyStopped**: boolean

*Inherited from [Match](_match_.match.md).[emergencyStopped](_match_.match.md#emergencystopped)*

*Defined in match.ts:53*

___

### fouls

• `Readonly` **fouls**: [Fouls](../interfaces/_match_.fouls.md)

*Inherited from [Match](_match_.match.md).[fouls](_match_.match.md#fouls)*

*Defined in match.ts:51*

___

### nonPieceTrackerRankingPoints

• `Readonly` **nonPieceTrackerRankingPoints**: number

*Inherited from [Match](_match_.match.md).[nonPieceTrackerRankingPoints](_match_.match.md#nonpiecetrackerrankingpoints)*

*Defined in match.ts:56*

___

### number

• `Readonly` **number**: number

*Inherited from [Match](_match_.match.md).[number](_match_.match.md#number)*

*Defined in match.ts:46*

___

### pieceTrackers

•  **pieceTrackers**: [[PowerCellTracker](_games_infinite_recharge_.powercelltracker.md), [ColorWheel](_games_infinite_recharge_.colorwheel.md), [ShieldGenerator](_games_infinite_recharge_.shieldgenerator.md)]

*Overrides [Match](_match_.match.md).[pieceTrackers](_match_.match.md#piecetrackers)*

*Defined in games/infinite-recharge.ts:145*

___

### pointsFromFouls

• `Readonly` **pointsFromFouls**: number

*Inherited from [Match](_match_.match.md).[pointsFromFouls](_match_.match.md#pointsfromfouls)*

*Defined in match.ts:57*

___

### teamNumber

• `Readonly` **teamNumber**: number

*Inherited from [Match](_match_.match.md).[teamNumber](_match_.match.md#teamnumber)*

*Defined in match.ts:43*

___

### type

• `Readonly` **type**: string

*Inherited from [Match](_match_.match.md).[type](_match_.match.md#type)*

*Defined in match.ts:45*

## Accessors

### points

• get **points**(): number

*Inherited from [Match](_match_.match.md).[points](_match_.match.md#points)*

*Defined in match.ts:84*

Gets the total number of points scored in a match

**Returns:** number

___

### rankingPoints

• get **rankingPoints**(): number

*Inherited from [Match](_match_.match.md).[rankingPoints](_match_.match.md#rankingpoints)*

*Defined in match.ts:94*

Gets ranking points

**Returns:** number
