[frc-scouting](../README.md) / [Exports](../modules.md) / SQLBackend

# Class: SQLBackend

Stores teams and matches from various games in SQL.

## Implements

- [`StorageBackend`](../interfaces/StorageBackend.md)

## Table of contents

### Constructors

- [constructor](SQLBackend.md#constructor)

### Properties

- [plans](SQLBackend.md#plans)

### Methods

- [deleteMatchByNumber](SQLBackend.md#deletematchbynumber)
- [deleteMatchesByTeam](SQLBackend.md#deletematchesbyteam)
- [deleteTeam](SQLBackend.md#deleteteam)
- [getMatchByNumber](SQLBackend.md#getmatchbynumber)
- [getMatchesByNumber](SQLBackend.md#getmatchesbynumber)
- [getMatchesByTeam](SQLBackend.md#getmatchesbyteam)
- [getTeam](SQLBackend.md#getteam)
- [registerPlan](SQLBackend.md#registerplan)
- [saveMatch](SQLBackend.md#savematch)
- [saveTeam](SQLBackend.md#saveteam)
- [toString](SQLBackend.md#tostring)

## Constructors

### constructor

• **new SQLBackend**(...`plans`)

Creates a new SQL backend

#### Parameters

| Name | Type |
| :------ | :------ |
| `...plans` | [`SQLStoragePlan`](SQLStoragePlan.md)<[`Match`](Match.md)\>[] |

#### Defined in

storage/sqlite.ts:93

## Properties

### plans

• **plans**: [`SQLStoragePlan`](SQLStoragePlan.md)<[`Match`](Match.md)\>[]

#### Defined in

storage/sqlite.ts:90

## Methods

### deleteMatchByNumber

▸ **deleteMatchByNumber**(`number`): `void`

deletes a match

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`void`

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[deleteMatchByNumber](../interfaces/StorageBackend.md#deletematchbynumber)

#### Defined in

storage/sqlite.ts:183

___

### deleteMatchesByTeam

▸ **deleteMatchesByTeam**(`team`): `void`

deletes matches

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | `number` \| [`Team`](Team.md)<[`Match`](Match.md)\> |

#### Returns

`void`

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[deleteMatchesByTeam](../interfaces/StorageBackend.md#deletematchesbyteam)

#### Defined in

storage/sqlite.ts:190

___

### deleteTeam

▸ **deleteTeam**(`team`, `deleteMatches?`): `void`

deletes a team

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | `number` \| [`Team`](Team.md)<[`Match`](Match.md)\> |
| `deleteMatches?` | `boolean` |

#### Returns

`void`

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[deleteTeam](../interfaces/StorageBackend.md#deleteteam)

#### Defined in

storage/sqlite.ts:136

___

### getMatchByNumber

▸ **getMatchByNumber**(`number`): ``null`` \| [`Match`](Match.md)

gets one match

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

``null`` \| [`Match`](Match.md)

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[getMatchByNumber](../interfaces/StorageBackend.md#getmatchbynumber)

#### Defined in

storage/sqlite.ts:167

___

### getMatchesByNumber

▸ **getMatchesByNumber**(`number`): [`Match`](Match.md)[]

gets matches

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

[`Match`](Match.md)[]

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[getMatchesByNumber](../interfaces/StorageBackend.md#getmatchesbynumber)

#### Defined in

storage/sqlite.ts:158

___

### getMatchesByTeam

▸ **getMatchesByTeam**(`team`): [`Match`](Match.md)[]

gets matches

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | `number` \| [`Team`](Team.md)<[`Match`](Match.md)\> |

#### Returns

[`Match`](Match.md)[]

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[getMatchesByTeam](../interfaces/StorageBackend.md#getmatchesbyteam)

#### Defined in

storage/sqlite.ts:172

___

### getTeam

▸ **getTeam**(`number`): ``null`` \| [`Team`](Team.md)<[`Match`](Match.md)\>

gets a team

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

``null`` \| [`Team`](Team.md)<[`Match`](Match.md)\>

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[getTeam](../interfaces/StorageBackend.md#getteam)

#### Defined in

storage/sqlite.ts:123

___

### registerPlan

▸ **registerPlan**(`plan`): `void`

Registers a new storage plan

#### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`SQLStoragePlan`](SQLStoragePlan.md)<[`Match`](Match.md)\> |

#### Returns

`void`

#### Defined in

storage/sqlite.ts:98

___

### saveMatch

▸ **saveMatch**(`match`): `void`

saves a match

#### Parameters

| Name | Type |
| :------ | :------ |
| `match` | [`Match`](Match.md) |

#### Returns

`void`

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[saveMatch](../interfaces/StorageBackend.md#savematch)

#### Defined in

storage/sqlite.ts:145

___

### saveTeam

▸ **saveTeam**(`team`): `void`

Saves a team

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | [`Team`](Team.md)<[`Match`](Match.md)\> |

#### Returns

`void`

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[saveTeam](../interfaces/StorageBackend.md#saveteam)

#### Defined in

storage/sqlite.ts:103

___

### toString

▸ **toString**(): `string`

String representation

#### Returns

`string`

#### Defined in

storage/sqlite.ts:198
