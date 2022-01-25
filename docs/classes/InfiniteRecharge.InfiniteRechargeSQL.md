[@bread5940/frc-scouting](../README.md) / [Exports](../modules.md) / [InfiniteRecharge](../modules/InfiniteRecharge.md) / InfiniteRechargeSQL

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
- [getMatches](InfiniteRecharge.InfiniteRechargeSQL.md#getmatches)
- [getStatement](InfiniteRecharge.InfiniteRechargeSQL.md#getstatement)
- [insertMatch](InfiniteRecharge.InfiniteRechargeSQL.md#insertmatch)

## Constructors

### constructor

• **new InfiniteRechargeSQL**(`absolutePath`)

constructs the storage plan

#### Parameters

| Name | Type |
| :------ | :------ |
| `absolutePath` | `string` |

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[constructor](SQLStoragePlan.md#constructor)

#### Defined in

[games/infinite-recharge/index.ts:170](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/games/infinite-recharge/index.ts#L170)

## Properties

### database

• **database**: `Database`

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[database](SQLStoragePlan.md#database)

#### Defined in

[storage/sqlite.ts:18](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/sqlite.ts#L18)

___

### matchInsertionTransaction

• **matchInsertionTransaction**: `Transaction`

#### Defined in

[games/infinite-recharge/index.ts:167](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/games/infinite-recharge/index.ts#L167)

___

### statementCache

• **statementCache**: `Map`<`string`, `Statement`<`any`[]\>\>

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[statementCache](SQLStoragePlan.md#statementcache)

#### Defined in

[storage/sqlite.ts:19](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/sqlite.ts#L19)

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

[games/infinite-recharge/index.ts:201](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/games/infinite-recharge/index.ts#L201)

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

[games/infinite-recharge/index.ts:206](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/games/infinite-recharge/index.ts#L206)

___

### dbDataToTeam

▸ **dbDataToTeam**(`data`): [`Team`](Team.md)<[`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)\>

**`deprecated`** as of 0.3.0, this shouldn't be necessary for anything

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `number` |
| `data.number` | `number` |

#### Returns

[`Team`](Team.md)<[`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)\>

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[dbDataToTeam](SQLStoragePlan.md#dbdatatoteam)

#### Defined in

[storage/sqlite.ts:51](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/sqlite.ts#L51)

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

[storage/sqlite.ts:72](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/sqlite.ts#L72)

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

[storage/sqlite.ts:65](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/sqlite.ts#L65)

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

[storage/sqlite.ts:38](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/sqlite.ts#L38)

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

[games/infinite-recharge/index.ts:260](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/games/infinite-recharge/index.ts#L260)
