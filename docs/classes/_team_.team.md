**[frc-scouting](../README.md)**

> [Globals](../globals.md) / ["team"](../modules/_team_.md) / Team

# Class: Team\<T>

Represents a FRC team

## Type parameters

Name | Type |
------ | ------ |
`T` | [Match](_match_.match.md) |

## Hierarchy

* **Team**

## Index

### Constructors

* [constructor](_team_.team.md#constructor)

### Properties

* [matches](_team_.team.md#matches)
* [number](_team_.team.md#number)

### Methods

* [addMatches](_team_.team.md#addmatches)
* [getMean](_team_.team.md#getmean)
* [getMedian](_team_.team.md#getmedian)
* [getMode](_team_.team.md#getmode)

## Constructors

### constructor

\+ **new Team**(`number`: number, ...`matches`: T[]): [Team](_team_.team.md)

*Defined in team.ts:13*

Instantiates a new team.
TODO: support passing in match numbers and looking them up from the DB

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |
`...matches` | T[] |

**Returns:** [Team](_team_.team.md)

## Properties

### matches

•  **matches**: T[]

*Defined in team.ts:13*

the matches that the team played in

___

### number

•  **number**: number

*Defined in team.ts:11*

## Methods

### addMatches

▸ **addMatches**(...`matches`: T[]): void

*Defined in team.ts:73*

Adds a match to the team

#### Parameters:

Name | Type |
------ | ------ |
`...matches` | T[] |

**Returns:** void

___

### getMean

▸ **getMean**(`property`: keyof T): number

*Defined in team.ts:25*

Gets the mean of any match property

#### Parameters:

Name | Type |
------ | ------ |
`property` | keyof T |

**Returns:** number

___

### getMedian

▸ **getMedian**(`property`: keyof [Match](_match_.match.md)): number

*Defined in team.ts:53*

Gets the median of any match property

#### Parameters:

Name | Type |
------ | ------ |
`property` | keyof [Match](_match_.match.md) |

**Returns:** number

___

### getMode

▸ **getMode**(`property`: keyof T): number

*Defined in team.ts:35*

Gets the mode of any match property

#### Parameters:

Name | Type |
------ | ------ |
`property` | keyof T |

**Returns:** number
