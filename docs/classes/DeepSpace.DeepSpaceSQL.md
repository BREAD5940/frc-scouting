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
- [deleteTeams](DeepSpace.DeepSpaceSQL.md#deleteteams)
- [getMatches](DeepSpace.DeepSpaceSQL.md#getmatches)
- [getStatement](DeepSpace.DeepSpaceSQL.md#getstatement)
- [getTeams](DeepSpace.DeepSpaceSQL.md#getteams)
- [insertMatch](DeepSpace.DeepSpaceSQL.md#insertmatch)
- [insertTeam](DeepSpace.DeepSpaceSQL.md#insertteam)

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

games/deep-space.ts:160

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

games/deep-space.ts:158

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

games/deep-space.ts:205

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

games/deep-space.ts:210

___

### dbDataToTeam

▸ **dbDataToTeam**(`data`): [`Team`](Team.md)<[`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)\>

Converts data from the database into a team

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Team`](Team.md)<[`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)\>

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[dbDataToTeam](SQLStoragePlan.md#dbdatatoteam)

#### Defined in

games/deep-space.ts:261

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

▸ **getTeams**(`conditions`): [`Team`](Team.md)<[`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)\>[]

gets teams

#### Parameters

| Name | Type |
| :------ | :------ |
| `conditions` | { `column`: `string` ; `value`: `string` \| `number`  }[] |

#### Returns

[`Team`](Team.md)<[`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)\>[]

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
| `match` | [`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md) |

#### Returns

`void`

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[insertMatch](SQLStoragePlan.md#insertmatch)

#### Defined in

games/deep-space.ts:270

___

### insertTeam

▸ **insertTeam**(`team`): `void`

Inserts a team

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | [`Team`](Team.md)<[`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)\> |

#### Returns

`void`

#### Overrides

[SQLStoragePlan](SQLStoragePlan.md).[insertTeam](SQLStoragePlan.md#insertteam)

#### Defined in

games/deep-space.ts:275
