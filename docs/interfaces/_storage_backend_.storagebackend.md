**[frc-scouting](../README.md)**

> [Globals](../globals.md) / ["storage/backend"](../modules/_storage_backend_.md) / StorageBackend

# Interface: StorageBackend

## Hierarchy

* **StorageBackend**

## Implemented by

* [JSONBackend](../classes/_storage_json_.jsonbackend.md)
* [SQLBackend](../classes/_storage_sqlite_.sqlbackend.md)

## Index

### Methods

* [deleteMatchByNumber](_storage_backend_.storagebackend.md#deletematchbynumber)
* [deleteMatchesByTeam](_storage_backend_.storagebackend.md#deletematchesbyteam)
* [deleteTeam](_storage_backend_.storagebackend.md#deleteteam)
* [getMatchByNumber](_storage_backend_.storagebackend.md#getmatchbynumber)
* [getMatchesByTeam](_storage_backend_.storagebackend.md#getmatchesbyteam)
* [getTeam](_storage_backend_.storagebackend.md#getteam)
* [saveMatch](_storage_backend_.storagebackend.md#savematch)
* [saveTeam](_storage_backend_.storagebackend.md#saveteam)

## Methods

### deleteMatchByNumber

▸ **deleteMatchByNumber**(`number`: number): void

*Defined in storage/backend.ts:23*

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |

**Returns:** void

___

### deleteMatchesByTeam

▸ **deleteMatchesByTeam**(`team`: [Team](../classes/_team_.team.md)\<[Match](../classes/_match_.match.md)> \| number): void

*Defined in storage/backend.ts:24*

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](../classes/_team_.team.md)\<[Match](../classes/_match_.match.md)> \| number |

**Returns:** void

___

### deleteTeam

▸ **deleteTeam**(`team`: [Team](../classes/_team_.team.md)\<[Match](../classes/_match_.match.md)> \| number, `deleteMatches?`: undefined \| false \| true): void

*Defined in storage/backend.ts:13*

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](../classes/_team_.team.md)\<[Match](../classes/_match_.match.md)> \| number |
`deleteMatches?` | undefined \| false \| true |

**Returns:** void

___

### getMatchByNumber

▸ **getMatchByNumber**(`number`: number): [Match](../classes/_match_.match.md) \| null

*Defined in storage/backend.ts:16*

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |

**Returns:** [Match](../classes/_match_.match.md) \| null

___

### getMatchesByTeam

▸ **getMatchesByTeam**(`team`: [Team](../classes/_team_.team.md)\<[Match](../classes/_match_.match.md)> \| number): [Match](../classes/_match_.match.md)[]

*Defined in storage/backend.ts:22*

Gets matches ASSOCIATED with the team (i.e. as part of the team, not just any match scouted for that team)
I don't know what the desired behavior is here, and if we deprecate JSON crap it'd be easier to make it do
what we actually want.

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](../classes/_team_.team.md)\<[Match](../classes/_match_.match.md)> \| number |

**Returns:** [Match](../classes/_match_.match.md)[]

___

### getTeam

▸ **getTeam**(`number`: number): [Team](../classes/_team_.team.md)\<[Match](../classes/_match_.match.md)> \| null

*Defined in storage/backend.ts:12*

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |

**Returns:** [Team](../classes/_team_.team.md)\<[Match](../classes/_match_.match.md)> \| null

___

### saveMatch

▸ **saveMatch**(`match`: [Match](../classes/_match_.match.md)): void

*Defined in storage/backend.ts:15*

#### Parameters:

Name | Type |
------ | ------ |
`match` | [Match](../classes/_match_.match.md) |

**Returns:** void

___

### saveTeam

▸ **saveTeam**(`team`: [Team](../classes/_team_.team.md)\<[Match](../classes/_match_.match.md)>): void

*Defined in storage/backend.ts:11*

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](../classes/_team_.team.md)\<[Match](../classes/_match_.match.md)> |

**Returns:** void
