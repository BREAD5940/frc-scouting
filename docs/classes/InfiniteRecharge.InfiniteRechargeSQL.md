[frc-scouting](../README.md) / [Exports](../modules.md) / [InfiniteRecharge](../modules/InfiniteRecharge.md) / InfiniteRechargeSQL

# Class: InfiniteRechargeSQL

[InfiniteRecharge](../modules/InfiniteRecharge.md).InfiniteRechargeSQL

Stores Infinite Recharge teams/matches in SQL

## Hierarchy

- [`SQLStoragePlan`](SQLStoragePlan.md)<[`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)\>

  ↳ **`InfiniteRechargeSQL`**

## Table of contents

### Constructors

- [constructor](InfiniteRecharge.InfiniteRechargeSQL.md#constructor)

### Properties

- [database](InfiniteRecharge.InfiniteRechargeSQL.md#database)
- [matchInsertionTransaction](InfiniteRecharge.InfiniteRechargeSQL.md#matchinsertiontransaction)
- [statementCache](InfiniteRecharge.InfiniteRechargeSQL.md#statementcache)

### Methods

- [applies](InfiniteRecharge.InfiniteRechargeSQL.md#applies)
- [dbDataToMatch](InfiniteRecharge.InfiniteRechargeSQL.md#dbdatatomatch)
- [dbDataToTeam](InfiniteRecharge.InfiniteRechargeSQL.md#dbdatatoteam)
- [deleteMatches](InfiniteRecharge.InfiniteRechargeSQL.md#deletematches)
- [deleteTeams](InfiniteRecharge.InfiniteRechargeSQL.md#deleteteams)
- [getMatches](InfiniteRecharge.InfiniteRechargeSQL.md#getmatches)
- [getStatement](InfiniteRecharge.InfiniteRechargeSQL.md#getstatement)
- [getTeams](InfiniteRecharge.InfiniteRechargeSQL.md#getteams)
- [insertMatch](InfiniteRecharge.InfiniteRechargeSQL.md#insertmatch)
- [insertTeam](InfiniteRecharge.InfiniteRechargeSQL.md#insertteam)

## Constructors

### constructor

• **new InfiniteRechargeSQL**(`absolutePath`)

it's a constructor, you absolutely incompetent dingus of a linter, shut up about JSDoc already

#### Parameters

| Name | Type |
| :------ | :------ |
| `absolutePath` | `string` |

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[constructor](SQLStoragePlan.md#constructor)

#### Defined in

games/infinite-recharge.ts:170

## Properties

### database

• **database**: `Database`

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[database](SQLStoragePlan.md#database)

#### Defined in

storage/sqlite.ts:18

___

### matchInsertionTransaction

• **matchInsertionTransaction**: `Transaction`

#### Defined in

games/infinite-recharge.ts:167

___

### statementCache

• **statementCache**: `Map`<`string`, `Statement`<`any`[]\>\>

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[statementCache](SQLStoragePlan.md#statementcache)

#### Defined in

storage/sqlite.ts:19

## Methods

### applies

▸ **applies**(`match`): `boolean`

Determines whether a match can be stored by this storage plan.

#### Parameters

| Name | Type |
| :------ | :------ |
| `match` | [`Match`](Match.md) |

#### Returns

`boolean`

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[applies](SQLStoragePlan.md#applies)

#### Defined in

games/infinite-recharge.ts:201

___

### dbDataToMatch

▸ **dbDataToMatch**(`data`): [`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)

Converts match data from the db into a match

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[dbDataToMatch](SQLStoragePlan.md#dbdatatomatch)

#### Defined in

games/infinite-recharge.ts:215

___

### dbDataToTeam

▸ **dbDataToTeam**(`data`): [`Team`](Team.md)<[`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)\>

Converts data from the database into a team

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Team`](Team.md)<[`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)\>

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[dbDataToTeam](SQLStoragePlan.md#dbdatatoteam)

#### Defined in

games/infinite-recharge.ts:206

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

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[deleteMatches](SQLStoragePlan.md#deletematches)

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

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[deleteTeams](SQLStoragePlan.md#deleteteams)

#### Defined in

storage/sqlite.ts:80

___

### getMatches

▸ **getMatches**(`conditions`): [`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)[]

gets matches

#### Parameters

| Name | Type |
| :------ | :------ |
| `conditions` | { `column`: `string` ; `value`: `string` \| `number`  }[] |

#### Returns

[`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)[]

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[getMatches](SQLStoragePlan.md#getmatches)

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

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[getStatement](SQLStoragePlan.md#getstatement)

#### Defined in

storage/sqlite.ts:38

___

### getTeams

▸ **getTeams**(`conditions`): [`Team`](Team.md)<[`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)\>[]

gets teams

#### Parameters

| Name | Type |
| :------ | :------ |
| `conditions` | { `column`: `string` ; `value`: `string` \| `number`  }[] |

#### Returns

[`Team`](Team.md)<[`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)\>[]

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[getTeams](SQLStoragePlan.md#getteams)

#### Defined in

storage/sqlite.ts:73

___

### insertMatch

▸ **insertMatch**(`match`): `void`

Inserts a match

#### Parameters

| Name | Type |
| :------ | :------ |
| `match` | [`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md) |

#### Returns

`void`

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[insertMatch](SQLStoragePlan.md#insertmatch)

#### Defined in

games/infinite-recharge.ts:269

___

### insertTeam

▸ **insertTeam**(`team`): `void`

Inserts a team

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | [`Team`](Team.md)<[`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)\> |

#### Returns

`void`

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[insertTeam](SQLStoragePlan.md#insertteam)

#### Defined in

games/infinite-recharge.ts:274