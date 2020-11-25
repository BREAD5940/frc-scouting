**[frc-scouting](../README.md)**

> [Globals](../globals.md) / ["storage/sqlite"](../modules/_storage_sqlite_.md) / SQLBackend

# Class: SQLBackend

Stores teams and matches from various games in SQL.

## Hierarchy

* **SQLBackend**

## Implements

* [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)

## Index

### Constructors

* [constructor](_storage_sqlite_.sqlbackend.md#constructor)

### Properties

* [plans](_storage_sqlite_.sqlbackend.md#plans)

### Methods

* [deleteMatchByNumber](_storage_sqlite_.sqlbackend.md#deletematchbynumber)
* [deleteMatchesByTeam](_storage_sqlite_.sqlbackend.md#deletematchesbyteam)
* [deleteTeam](_storage_sqlite_.sqlbackend.md#deleteteam)
* [getMatchByNumber](_storage_sqlite_.sqlbackend.md#getmatchbynumber)
* [getMatchesByTeam](_storage_sqlite_.sqlbackend.md#getmatchesbyteam)
* [getTeam](_storage_sqlite_.sqlbackend.md#getteam)
* [registerPlan](_storage_sqlite_.sqlbackend.md#registerplan)
* [saveMatch](_storage_sqlite_.sqlbackend.md#savematch)
* [saveTeam](_storage_sqlite_.sqlbackend.md#saveteam)

## Constructors

### constructor

\+ **new SQLBackend**(...`plans`: [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md)\<[Match](_match_.match.md)>[]): [SQLBackend](_storage_sqlite_.sqlbackend.md)

*Defined in storage/sqlite.ts:90*

Creates a new SQL backend

#### Parameters:

Name | Type |
------ | ------ |
`...plans` | [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md)\<[Match](_match_.match.md)>[] |

**Returns:** [SQLBackend](_storage_sqlite_.sqlbackend.md)

## Properties

### plans

•  **plans**: [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md)\<[Match](_match_.match.md)>[]

*Defined in storage/sqlite.ts:90*

## Methods

### deleteMatchByNumber

▸ **deleteMatchByNumber**(`number`: number): void

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/sqlite.ts:178*

deletes a match

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |

**Returns:** void

___

### deleteMatchesByTeam

▸ **deleteMatchesByTeam**(`team`: [Team](_team_.team.md)\<[Match](_match_.match.md)> \| number): void

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/sqlite.ts:185*

deletes matches

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](_team_.team.md)\<[Match](_match_.match.md)> \| number |

**Returns:** void

___

### deleteTeam

▸ **deleteTeam**(`team`: [Team](_team_.team.md)\<[Match](_match_.match.md)> \| number, `deleteMatches?`: undefined \| false \| true): void

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/sqlite.ts:133*

deletes a team

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](_team_.team.md)\<[Match](_match_.match.md)> \| number |
`deleteMatches?` | undefined \| false \| true |

**Returns:** void

___

### getMatchByNumber

▸ **getMatchByNumber**(`number`: number): null \| [Match](_match_.match.md)

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/sqlite.ts:155*

gets a match

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |

**Returns:** null \| [Match](_match_.match.md)

___

### getMatchesByTeam

▸ **getMatchesByTeam**(`team`: [Team](_team_.team.md)\<[Match](_match_.match.md)> \| number): [Match](_match_.match.md)[]

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/sqlite.ts:167*

gets matches

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](_team_.team.md)\<[Match](_match_.match.md)> \| number |

**Returns:** [Match](_match_.match.md)[]

___

### getTeam

▸ **getTeam**(`number`: number): null \| [Team](_team_.team.md)\<[Match](_match_.match.md)>

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/sqlite.ts:121*

gets a team

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |

**Returns:** null \| [Team](_team_.team.md)\<[Match](_match_.match.md)>

___

### registerPlan

▸ **registerPlan**(`plan`: [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md)\<[Match](_match_.match.md)>): void

*Defined in storage/sqlite.ts:98*

Registers a new storage plan

#### Parameters:

Name | Type |
------ | ------ |
`plan` | [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md)\<[Match](_match_.match.md)> |

**Returns:** void

___

### saveMatch

▸ **saveMatch**(`match`: [Match](_match_.match.md)): void

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/sqlite.ts:142*

saves a match

#### Parameters:

Name | Type |
------ | ------ |
`match` | [Match](_match_.match.md) |

**Returns:** void

___

### saveTeam

▸ **saveTeam**(`team`: [Team](_team_.team.md)\<[Match](_match_.match.md)>): void

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/sqlite.ts:103*

Saves a team

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](_team_.team.md)\<[Match](_match_.match.md)> |

**Returns:** void
