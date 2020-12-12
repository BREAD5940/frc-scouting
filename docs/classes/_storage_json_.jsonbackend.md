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

* [storageDir](_storage_json_.jsonbackend.md#storagedir)

### Methods

* [deleteMatchByNumber](_storage_json_.jsonbackend.md#deletematchbynumber)
* [deleteMatchesByTeam](_storage_json_.jsonbackend.md#deletematchesbyteam)
* [deleteTeam](_storage_json_.jsonbackend.md#deleteteam)
* [getMatchByNumber](_storage_json_.jsonbackend.md#getmatchbynumber)
* [getMatchesByTeam](_storage_json_.jsonbackend.md#getmatchesbyteam)
* [getTeam](_storage_json_.jsonbackend.md#getteam)
* [saveMatch](_storage_json_.jsonbackend.md#savematch)
* [saveTeam](_storage_json_.jsonbackend.md#saveteam)

## Constructors

### constructor

\+ **new JSONBackend**(`path`: string): [JSONBackend](_storage_json_.jsonbackend.md)

*Defined in storage/json.ts:29*

constructor

#### Parameters:

Name | Type |
------ | ------ |
`path` | string |

**Returns:** [JSONBackend](_storage_json_.jsonbackend.md)

## Properties

### storageDir

•  **storageDir**: string

*Defined in storage/json.ts:29*

## Methods

### deleteMatchByNumber

▸ **deleteMatchByNumber**(`number`: number): void

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/json.ts:102*

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

*Defined in storage/json.ts:110*

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

*Defined in storage/json.ts:95*

deletes a team

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](_team_.team.md)\<any> \| number |
`deleteMatches?` | undefined \| false \| true |

**Returns:** void

___

### getMatchByNumber

▸ **getMatchByNumber**(`number`: number): null \| [MatchTemplate](_storage_json_.matchtemplate.md)

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/json.ts:70*

gets a match

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |

**Returns:** null \| [MatchTemplate](_storage_json_.matchtemplate.md)

___

### getMatchesByTeam

▸ **getMatchesByTeam**(`team`: [Team](_team_.team.md)\<any> \| number): [Match](_match_.match.md)[]

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/json.ts:80*

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

*Defined in storage/json.ts:57*

gets a team

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |

**Returns:** null \| [Team](_team_.team.md)\<[Match](_match_.match.md)>

___

### saveMatch

▸ **saveMatch**(`match`: [Match](_match_.match.md)): void

*Implementation of [StorageBackend](../interfaces/_storage_backend_.storagebackend.md)*

*Defined in storage/json.ts:52*

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

*Defined in storage/json.ts:40*

saves a team

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](_team_.team.md)\<[Match](_match_.match.md)> |

**Returns:** void
