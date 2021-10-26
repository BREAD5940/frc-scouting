[frc-scouting](../README.md) / [Exports](../modules.md) / SQLStoragePlan

# Class: SQLStoragePlan<T\>

An interface that describes how to store data in SQL.
Each game (Deep Space, Infinite Recharge, etc.) should implement this.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Match`](Match.md) |

## Hierarchy

- **`SQLStoragePlan`**

  ↳ [`DeepSpaceSQL`](DeepSpace.DeepSpaceSQL.md)

  ↳ [`InfiniteRechargeSQL`](InfiniteRecharge.InfiniteRechargeSQL.md)

## Table of contents

### Constructors

- [constructor](SQLStoragePlan.md#constructor)

### Properties

- [database](SQLStoragePlan.md#database)
- [statementCache](SQLStoragePlan.md#statementcache)

### Methods

- [applies](SQLStoragePlan.md#applies)
- [dbDataToMatch](SQLStoragePlan.md#dbdatatomatch)
- [dbDataToTeam](SQLStoragePlan.md#dbdatatoteam)
- [deleteMatches](SQLStoragePlan.md#deletematches)
- [deleteTeams](SQLStoragePlan.md#deleteteams)
- [getMatches](SQLStoragePlan.md#getmatches)
- [getStatement](SQLStoragePlan.md#getstatement)
- [getTeams](SQLStoragePlan.md#getteams)
- [insertMatch](SQLStoragePlan.md#insertmatch)
- [insertTeam](SQLStoragePlan.md#insertteam)

## Constructors

### constructor

• **new SQLStoragePlan**<`T`\>(`absolutePath`)

Creates a new storage plan

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Match`](Match.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `absolutePath` | `string` |

#### Defined in

storage/sqlite.ts:22

## Properties

### database

• **database**: `Database`

#### Defined in

storage/sqlite.ts:18

___

### statementCache

• **statementCache**: `Map`<`string`, `Statement`<`any`[]\>\>

#### Defined in

storage/sqlite.ts:19

## Methods

### applies

▸ `Abstract` **applies**(`match`): `boolean`

Returns true if the match can be stored with this interface and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `match` | [`Match`](Match.md) |

#### Returns

`boolean`

#### Defined in

storage/sqlite.ts:51

___

### dbDataToMatch

▸ `Abstract` **dbDataToMatch**(`data`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`T`

#### Defined in

storage/sqlite.ts:47

___

### dbDataToTeam

▸ `Abstract` **dbDataToTeam**(`data`): [`Team`](Team.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Team`](Team.md)<`T`\>

#### Defined in

storage/sqlite.ts:48

___

### deleteMatches

▸ **deleteMatches**(`conditions`): `void`

deletes matches

#### Parameters

| Name | Type |
| :------ | :------ |
| `conditions` | { `column`: `string` ; `value`: `string` \| `number`  }[] |

#### Returns

`void`

#### Defined in

storage/sqlite.ts:63

___

### deleteTeams

▸ **deleteTeams**(`conditions`): `void`

deletes teams

#### Parameters

| Name | Type |
| :------ | :------ |
| `conditions` | { `column`: `string` ; `value`: `string` \| `number`  }[] |

#### Returns

`void`

#### Defined in

storage/sqlite.ts:80

___

### getMatches

▸ **getMatches**(`conditions`): `T`[]

gets matches

#### Parameters

| Name | Type |
| :------ | :------ |
| `conditions` | { `column`: `string` ; `value`: `string` \| `number`  }[] |

#### Returns

`T`[]

#### Defined in

storage/sqlite.ts:56

___

### getStatement

▸ **getStatement**(`query`): `Statement`<`any`[]\>

Gets the cached prepared statement, or generates it and adds it to the cache.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Statement`<`any`[]\>

#### Defined in

storage/sqlite.ts:38

___

### getTeams

▸ **getTeams**(`conditions`): [`Team`](Team.md)<`T`\>[]

gets teams

#### Parameters

| Name | Type |
| :------ | :------ |
| `conditions` | { `column`: `string` ; `value`: `string` \| `number`  }[] |

#### Returns

[`Team`](Team.md)<`T`\>[]

#### Defined in

storage/sqlite.ts:73

___

### insertMatch

▸ `Abstract` **insertMatch**(`match`): `void`

Inserts match

#### Parameters

| Name | Type |
| :------ | :------ |
| `match` | `T` |

#### Returns

`void`

#### Defined in

storage/sqlite.ts:54

___

### insertTeam

▸ `Abstract` **insertTeam**(`team`): `void`

Inserts team

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | [`Team`](Team.md)<`T`\> |

#### Returns

`void`

#### Defined in

storage/sqlite.ts:71
