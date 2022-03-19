[frc-scouting](../README.md) / [Exports](../modules.md) / [RapidReact](../modules/RapidReact.md) / RapidReactSQL

# Class: RapidReactSQL

[RapidReact](../modules/RapidReact.md).RapidReactSQL

Stores data about Rapid React matches in a SQLite database.

## Hierarchy

- [`SQLStoragePlan`](SQLStoragePlan.md)<[`RapidReactMatch`](RapidReact.RapidReactMatch.md)\>

  ↳ **`RapidReactSQL`**

## Table of contents

### Constructors

- [constructor](RapidReact.RapidReactSQL.md#constructor)

### Properties

- [database](RapidReact.RapidReactSQL.md#database)
- [statementCache](RapidReact.RapidReactSQL.md#statementcache)

### Methods

- [applies](RapidReact.RapidReactSQL.md#applies)
- [dbDataToMatch](RapidReact.RapidReactSQL.md#dbdatatomatch)
- [dbDataToTeam](RapidReact.RapidReactSQL.md#dbdatatoteam)
- [deleteMatches](RapidReact.RapidReactSQL.md#deletematches)
- [getMatches](RapidReact.RapidReactSQL.md#getmatches)
- [getStatement](RapidReact.RapidReactSQL.md#getstatement)
- [insertMatch](RapidReact.RapidReactSQL.md#insertmatch)

## Constructors

### constructor

• **new RapidReactSQL**(`absolutePath`)

constructs the storage plan

#### Parameters

| Name | Type |
| :------ | :------ |
| `absolutePath` | `string` |

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[constructor](SQLStoragePlan.md#constructor)

#### Defined in

[games/rapid-react/index.ts:156](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/rapid-react/index.ts#L156)

## Properties

### database

• **database**: `Database`

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[database](SQLStoragePlan.md#database)

#### Defined in

[storage/sqlite.ts:18](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/storage/sqlite.ts#L18)

___

### statementCache

• **statementCache**: `Map`<`string`, `Statement`<`any`[]\>\>

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[statementCache](SQLStoragePlan.md#statementcache)

#### Defined in

[storage/sqlite.ts:19](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/storage/sqlite.ts#L19)

## Methods

### applies

▸ **applies**(`match`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `match` | [`Match`](Match.md) |

#### Returns

`boolean`

`true` if this storage plan can store the given `match`, and `false` otherwise.

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[applies](SQLStoragePlan.md#applies)

#### Defined in

[games/rapid-react/index.ts:165](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/rapid-react/index.ts#L165)

___

### dbDataToMatch

▸ **dbDataToMatch**(`data`): [`RapidReactMatch`](RapidReact.RapidReactMatch.md)

Converts raw data from the SQLite database into a Match object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RapidReactMatch`](RapidReact.RapidReactMatch.md)

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[dbDataToMatch](SQLStoragePlan.md#dbdatatomatch)

#### Defined in

[games/rapid-react/index.ts:172](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/rapid-react/index.ts#L172)

___

### dbDataToTeam

▸ **dbDataToTeam**(`data`): [`Team`](Team.md)<[`RapidReactMatch`](RapidReact.RapidReactMatch.md)\>

**`deprecated`** as of 0.3.0, this shouldn't be necessary for anything

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `number` |
| `data.number` | `number` |

#### Returns

[`Team`](Team.md)<[`RapidReactMatch`](RapidReact.RapidReactMatch.md)\>

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[dbDataToTeam](SQLStoragePlan.md#dbdatatoteam)

#### Defined in

[storage/sqlite.ts:51](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/storage/sqlite.ts#L51)

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

[storage/sqlite.ts:72](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/storage/sqlite.ts#L72)

___

### getMatches

▸ **getMatches**(`conditions`): [`RapidReactMatch`](RapidReact.RapidReactMatch.md)[]

gets matches

#### Parameters

| Name | Type |
| :------ | :------ |
| `conditions` | { `column`: `string` ; `value`: `string` \| `number`  }[] |

#### Returns

[`RapidReactMatch`](RapidReact.RapidReactMatch.md)[]

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[getMatches](SQLStoragePlan.md#getmatches)

#### Defined in

[storage/sqlite.ts:65](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/storage/sqlite.ts#L65)

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

[storage/sqlite.ts:38](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/storage/sqlite.ts#L38)

___

### insertMatch

▸ **insertMatch**(`match`): `void`

Stores the given match into the SQLite database.

#### Parameters

| Name | Type |
| :------ | :------ |
| `match` | [`RapidReactMatch`](RapidReact.RapidReactMatch.md) |

#### Returns

`void`

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[insertMatch](SQLStoragePlan.md#insertmatch)

#### Defined in

[games/rapid-react/index.ts:200](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/rapid-react/index.ts#L200)
