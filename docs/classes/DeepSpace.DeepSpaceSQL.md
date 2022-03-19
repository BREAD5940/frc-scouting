[frc-scouting](../README.md) / [Exports](../modules.md) / [DeepSpace](../modules/DeepSpace.md) / DeepSpaceSQL

# Class: DeepSpaceSQL

[DeepSpace](../modules/DeepSpace.md).DeepSpaceSQL

Stores Deep Space teams/matches in SQLite

## Hierarchy

- [`SQLStoragePlan`](SQLStoragePlan.md)<[`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)\>

  ↳ **`DeepSpaceSQL`**

## Table of contents

### Constructors

- [constructor](DeepSpace.DeepSpaceSQL.md#constructor)

### Properties

- [database](DeepSpace.DeepSpaceSQL.md#database)
- [matchInsertionTransaction](DeepSpace.DeepSpaceSQL.md#matchinsertiontransaction)
- [statementCache](DeepSpace.DeepSpaceSQL.md#statementcache)

### Methods

- [applies](DeepSpace.DeepSpaceSQL.md#applies)
- [dbDataToMatch](DeepSpace.DeepSpaceSQL.md#dbdatatomatch)
- [dbDataToTeam](DeepSpace.DeepSpaceSQL.md#dbdatatoteam)
- [deleteMatches](DeepSpace.DeepSpaceSQL.md#deletematches)
- [getMatches](DeepSpace.DeepSpaceSQL.md#getmatches)
- [getStatement](DeepSpace.DeepSpaceSQL.md#getstatement)
- [insertMatch](DeepSpace.DeepSpaceSQL.md#insertmatch)

## Constructors

### constructor

• **new DeepSpaceSQL**(`absolutePath`)

constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `absolutePath` | `string` |

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[constructor](SQLStoragePlan.md#constructor)

#### Defined in

[games/deep-space/index.ts:160](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/deep-space/index.ts#L160)

## Properties

### database

• **database**: `Database`

#### Inherited from

[SQLStoragePlan](SQLStoragePlan.md).[database](SQLStoragePlan.md#database)

#### Defined in

[storage/sqlite.ts:18](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/storage/sqlite.ts#L18)

___

### matchInsertionTransaction

• **matchInsertionTransaction**: `Transaction`

#### Defined in

[games/deep-space/index.ts:158](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/deep-space/index.ts#L158)

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

[games/deep-space/index.ts:205](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/deep-space/index.ts#L205)

___

### dbDataToMatch

▸ **dbDataToMatch**(`data`): [`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)

Converts data from the database to a Match

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[dbDataToMatch](SQLStoragePlan.md#dbdatatomatch)

#### Defined in

[games/deep-space/index.ts:210](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/deep-space/index.ts#L210)

___

### dbDataToTeam

▸ **dbDataToTeam**(`data`): [`Team`](Team.md)<[`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)\>

**`deprecated`** as of 0.3.0, this shouldn't be necessary for anything

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `number` |
| `data.number` | `number` |

#### Returns

[`Team`](Team.md)<[`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)\>

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

▸ **getMatches**(`conditions`): [`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)[]

gets matches

#### Parameters

| Name | Type |
| :------ | :------ |
| `conditions` | { `column`: `string` ; `value`: `string` \| `number`  }[] |

#### Returns

[`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)[]

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

Inserts a match

#### Parameters

| Name | Type |
| :------ | :------ |
| `match` | [`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md) |

#### Returns

`void`

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[insertMatch](SQLStoragePlan.md#insertmatch)

#### Defined in

[games/deep-space/index.ts:261](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/deep-space/index.ts#L261)
