**[frc-scouting](../README.md)**

> [Globals](../globals.md) / ["games/deep-space"](../modules/_games_deep_space_.md) / DeepSpaceMatch

# Class: DeepSpaceMatch

Represents a Deep Space match

## Hierarchy

* [Match](_match_.match.md)

  ↳ **DeepSpaceMatch**

## Index

### Constructors

* [constructor](_games_deep_space_.deepspacematch.md#constructor)

### Properties

* [alliance](_games_deep_space_.deepspacematch.md#alliance)
* [bonusPoints](_games_deep_space_.deepspacematch.md#bonuspoints)
* [borked](_games_deep_space_.deepspacematch.md#borked)
* [cards](_games_deep_space_.deepspacematch.md#cards)
* [crossesStartLine](_games_deep_space_.deepspacematch.md#crossesstartline)
* [emergencyStopped](_games_deep_space_.deepspacematch.md#emergencystopped)
* [finalHABLevel](_games_deep_space_.deepspacematch.md#finalhablevel)
* [fouls](_games_deep_space_.deepspacematch.md#fouls)
* [helpsOthersHABClimb](_games_deep_space_.deepspacematch.md#helpsothershabclimb)
* [initialHABLevel](_games_deep_space_.deepspacematch.md#initialhablevel)
* [number](_games_deep_space_.deepspacematch.md#number)
* [pieceTrackers](_games_deep_space_.deepspacematch.md#piecetrackers)
* [pointsFromFouls](_games_deep_space_.deepspacematch.md#pointsfromfouls)
* [rankingPointRecord](_games_deep_space_.deepspacematch.md#rankingpointrecord)
* [rankingPoints](_games_deep_space_.deepspacematch.md#rankingpoints)
* [rocketsAssembled](_games_deep_space_.deepspacematch.md#rocketsassembled)
* [teamNumber](_games_deep_space_.deepspacematch.md#teamnumber)
* [type](_games_deep_space_.deepspacematch.md#type)

### Accessors

* [points](_games_deep_space_.deepspacematch.md#points)

## Constructors

### constructor

\+ **new DeepSpaceMatch**(`teamNumber`: number, `type`: string, `number`: number, `alliance`: [Alliance](../modules/_match_.md#alliance), `data`: Partial\<[DeepSpaceMatchData](../interfaces/_games_deep_space_.deepspacematchdata.md)> & { initialHABLevel: [HABLevel](../modules/_games_deep_space_.md#hablevel)  }): [DeepSpaceMatch](_games_deep_space_.deepspacematch.md)

*Overrides [Match](_match_.match.md).[constructor](_match_.match.md#constructor)*

*Defined in games/deep-space.ts:103*

Creates a new DeepSpaceMatch

#### Parameters:

Name | Type |
------ | ------ |
`teamNumber` | number |
`type` | string |
`number` | number |
`alliance` | [Alliance](../modules/_match_.md#alliance) |
`data` | Partial\<[DeepSpaceMatchData](../interfaces/_games_deep_space_.deepspacematchdata.md)> & { initialHABLevel: [HABLevel](../modules/_games_deep_space_.md#hablevel)  } |

**Returns:** [DeepSpaceMatch](_games_deep_space_.deepspacematch.md)

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

### crossesStartLine

•  **crossesStartLine**: boolean

*Defined in games/deep-space.ts:96*

___

### emergencyStopped

• `Readonly` **emergencyStopped**: boolean

*Inherited from [Match](_match_.match.md).[emergencyStopped](_match_.match.md#emergencystopped)*

*Defined in match.ts:50*

___

### finalHABLevel

•  **finalHABLevel**: [HABLevel](../modules/_games_deep_space_.md#hablevel)

*Defined in games/deep-space.ts:95*

___

### fouls

• `Readonly` **fouls**: [Fouls](../interfaces/_match_.fouls.md)

*Inherited from [Match](_match_.match.md).[fouls](_match_.match.md#fouls)*

*Defined in match.ts:48*

___

### helpsOthersHABClimb

•  **helpsOthersHABClimb**: boolean

*Defined in games/deep-space.ts:93*

___

### initialHABLevel

•  **initialHABLevel**: [HABLevel](../modules/_games_deep_space_.md#hablevel)

*Defined in games/deep-space.ts:94*

___

### number

• `Readonly` **number**: number

*Inherited from [Match](_match_.match.md).[number](_match_.match.md#number)*

*Defined in match.ts:43*

___

### pieceTrackers

•  **pieceTrackers**: [[CargoTracker](_games_deep_space_.cargotracker.md), [HatchPanelTracker](_games_deep_space_.hatchpaneltracker.md)]

*Overrides [Match](_match_.match.md).[pieceTrackers](_match_.match.md#piecetrackers)*

*Defined in games/deep-space.ts:91*

___

### pointsFromFouls

• `Readonly` **pointsFromFouls**: number

*Inherited from [Match](_match_.match.md).[pointsFromFouls](_match_.match.md#pointsfromfouls)*

*Defined in match.ts:54*

___

### rankingPointRecord

•  **rankingPointRecord**: Record\<[RankingPoints](../modules/_games_deep_space_.md#rankingpoints), boolean>

*Defined in games/deep-space.ts:101*

point:isGained

___

### rankingPoints

• `Readonly` **rankingPoints**: number

*Overrides [Match](_match_.match.md).[rankingPoints](_match_.match.md#rankingpoints)*

*Defined in games/deep-space.ts:103*

___

### rocketsAssembled

•  **rocketsAssembled**: Record\<[Rocket](../modules/_games_deep_space_.md#rocket), boolean>

*Defined in games/deep-space.ts:99*

rocket:isAssembled

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
