**[@theannalyst/frc-scouting](../README.md)**

> [Globals](../globals.md) / ["storage/json"](../modules/_storage_json_.md) / JSONBackend

# Class: JSONBackend

The JSON storage backend.

The directory structure is as follows:
<root>/
 |-------- matches/
 |          |------- match${number}-team${number}.json
 |          |------- match${number}.json
 |-------- teams/
 |          |------- team${number}.json
 |

## Hierarchy

* **JSONBackend**

## Implements

* [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)

## Index

### Constructors

* [constructor](_storage_json_.jsonbackend.md#constructor)

### Properties

* [plans](_storage_json_.jsonbackend.md#plans)
* [storageDir](_storage_json_.jsonbackend.md#storagedir)

### Methods

* [deleteMatchByNumber](_storage_json_.jsonbackend.md#deletematchbynumber)
* [deleteMatchesByTeam](_storage_json_.jsonbackend.md#deletematchesbyteam)
* [deleteTeam](_storage_json_.jsonbackend.md#deleteteam)
* [getMatchByNumber](_storage_json_.jsonbackend.md#getmatchbynumber)
* [getMatchesByTeam](_storage_json_.jsonbackend.md#getmatchesbyteam)
* [getTeam](_storage_json_.jsonbackend.md#getteam)
* [registerPlan](_storage_json_.jsonbackend.md#registerplan)
* [saveMatch](_storage_json_.jsonbackend.md#savematch)
* [saveTeam](_storage_json_.jsonbackend.md#saveteam)

## Constructors

### constructor

\+ **new JSONBackend**(`path`: string, ...`plans`: [JSONStoragePlan](../interfaces/_storage_json_.jsonstorageplan.md)\<[Match](_match_.match.md)>[]): [JSONBackend](_storage_json_.jsonbackend.md)

*Defined in storage/json.ts:36*

constructor

#### Parameters:

Name | Type |
------ | ------ |
`path` | string |
`...plans` | [JSONStoragePlan](../interfaces/_storage_json_.jsonstorageplan.md)\<[Match](_match_.match.md)>[] |

**Returns:** [JSONBackend](_storage_json_.jsonbackend.md)

## Properties

### plans

•  **plans**: [JSONStoragePlan](../interfaces/_storage_json_.jsonstorageplan.md)\<[Match](_match_.match.md)>[]

*Defined in storage/json.ts:36*

___

### storageDir

•  **storageDir**: string

*Defined in storage/json.ts:35*

## Methods

### deleteMatchByNumber

▸ **deleteMatchByNumber**(`number`: number): void

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/json.ts:115*

deletes a match by number

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |

**Returns:** void

___

### deleteMatchesByTeam

▸ **deleteMatchesByTeam**(`team`: [Team](_team_.team.md)\<any> \| number): void

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/json.ts:123*

deletes all matches associated with a given team

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](_team_.team.md)\<any> \| number |

**Returns:** void

___

### deleteTeam

▸ **deleteTeam**(`team`: [Team](_team_.team.md)\<any> \| number, `deleteMatches?`: undefined \| false \| true): void

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/json.ts:108*

deletes a team

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](_team_.team.md)\<any> \| number |
`deleteMatches?` | undefined \| false \| true |

**Returns:** void

___

### getMatchByNumber

▸ **getMatchByNumber**(`number`: number): null \| [Match](_match_.match.md)

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/json.ts:83*

gets a match

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |

**Returns:** null \| [Match](_match_.match.md)

___

### getMatchesByTeam

▸ **getMatchesByTeam**(`team`: [Team](_team_.team.md)\<any> \| number): [Match](_match_.match.md)[]

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/json.ts:93*

gets matches by team

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](_team_.team.md)\<any> \| number |

**Returns:** [Match](_match_.match.md)[]

___

### getTeam

▸ **getTeam**(`number`: number): null \| [Team](_team_.team.md)\<[Match](_match_.match.md)>

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/json.ts:70*

gets a team

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |

**Returns:** null \| [Team](_team_.team.md)\<[Match](_match_.match.md)>

___

### registerPlan

▸ **registerPlan**(`plan`: [JSONStoragePlan](../interfaces/_storage_json_.jsonstorageplan.md)\<[Match](_match_.match.md)>): void

*Defined in storage/json.ts:48*

register a plan

#### Parameters:

Name | Type |
------ | ------ |
`plan` | [JSONStoragePlan](../interfaces/_storage_json_.jsonstorageplan.md)\<[Match](_match_.match.md)> |

**Returns:** void

___

### saveMatch

▸ **saveMatch**(`match`: [Match](_match_.match.md)): void

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/json.ts:65*

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

*Defined in storage/json.ts:53*

saves a team

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](_team_.team.md)\<[Match](_match_.match.md)> |

**Returns:** void
