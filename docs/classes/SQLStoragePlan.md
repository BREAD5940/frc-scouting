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

  ↳ [`RapidReactSQL`](RapidReact.RapidReactSQL.md)

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
- [getMatches](SQLStoragePlan.md#getmatches)
- [getStatement](SQLStoragePlan.md#getstatement)
- [insertMatch](SQLStoragePlan.md#insertmatch)

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

[storage/sqlite.ts:22](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/sqlite.ts#L22)

## Properties

### database

• **database**: `Database`

#### Defined in

[storage/sqlite.ts:18](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/sqlite.ts#L18)

___

### statementCache

• **statementCache**: `Map`<`string`, `Statement`<`any`[]\>\>

#### Defined in

[storage/sqlite.ts:19](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/sqlite.ts#L19)

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

[storage/sqlite.ts:60](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/sqlite.ts#L60)

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

[storage/sqlite.ts:47](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/sqlite.ts#L47)

___

### dbDataToTeam

▸ **dbDataToTeam**(`data`): [`Team`](Team.md)<`T`\>

**`deprecated`** as of 0.3.0, this shouldn't be necessary for anything

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `number` |
| `data.number` | `number` |

#### Returns

[`Team`](Team.md)<`T`\>

#### Defined in

[storage/sqlite.ts:51](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/sqlite.ts#L51)

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

[storage/sqlite.ts:72](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/sqlite.ts#L72)

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

[storage/sqlite.ts:65](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/sqlite.ts#L65)

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

[storage/sqlite.ts:38](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/sqlite.ts#L38)

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

[storage/sqlite.ts:63](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/sqlite.ts#L63)
