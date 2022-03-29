[frc-scouting](../README.md) / [Exports](../modules.md) / JSONBackend

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

## Implements

- [`StorageBackend`](../interfaces/StorageBackend.md)

## Table of contents

### Constructors

- [constructor](JSONBackend.md#constructor)

### Properties

- [hooks](JSONBackend.md#hooks)
- [plans](JSONBackend.md#plans)
- [storageDir](JSONBackend.md#storagedir)

### Methods

- [deleteMatchByNumber](JSONBackend.md#deletematchbynumber)
- [deleteMatchesByTeam](JSONBackend.md#deletematchesbyteam)
- [deleteTeam](JSONBackend.md#deleteteam)
- [getMatchByNumber](JSONBackend.md#getmatchbynumber)
- [getMatchesByNumber](JSONBackend.md#getmatchesbynumber)
- [getMatchesByTeam](JSONBackend.md#getmatchesbyteam)
- [getTeam](JSONBackend.md#getteam)
- [registerPlan](JSONBackend.md#registerplan)
- [saveMatch](JSONBackend.md#savematch)
- [saveTeam](JSONBackend.md#saveteam)
- [toString](JSONBackend.md#tostring)

## Constructors

### constructor

• **new JSONBackend**(`path`, `hooks`, ...`plans`)

constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `hooks` | `Partial`<`StorageHooks`\> |
| `...plans` | [`JSONStoragePlan`](../interfaces/JSONStoragePlan.md)<[`Match`](Match.md)\>[] |

#### Defined in

[storage/json.ts:40](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L40)

## Properties

### hooks

• **hooks**: `Partial`<`StorageHooks`\>

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[hooks](../interfaces/StorageBackend.md#hooks)

#### Defined in

[storage/json.ts:37](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L37)

___

### plans

• **plans**: [`JSONStoragePlan`](../interfaces/JSONStoragePlan.md)<[`Match`](Match.md)\>[]

#### Defined in

[storage/json.ts:36](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L36)

___

### storageDir

• **storageDir**: `string`

#### Defined in

[storage/json.ts:35](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L35)

## Methods

### deleteMatchByNumber

▸ **deleteMatchByNumber**(`number`): `void`

deletes a match by number

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`void`

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[deleteMatchByNumber](../interfaces/StorageBackend.md#deletematchbynumber)

#### Defined in

[storage/json.ts:124](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L124)

___

### deleteMatchesByTeam

▸ **deleteMatchesByTeam**(`team`): `void`

deletes all matches associated with a given team

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | `number` \| [`Team`](Team.md)<`any`\> |

#### Returns

`void`

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[deleteMatchesByTeam](../interfaces/StorageBackend.md#deletematchesbyteam)

#### Defined in

[storage/json.ts:133](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L133)

___

### deleteTeam

▸ **deleteTeam**(`team`, `deleteMatches?`): `void`

deletes a team

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | `number` \| [`Team`](Team.md)<`any`\> |
| `deleteMatches?` | `boolean` |

#### Returns

`void`

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[deleteTeam](../interfaces/StorageBackend.md#deleteteam)

#### Defined in

[storage/json.ts:117](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L117)

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

[storage/json.ts:97](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L97)

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

[storage/json.ts:85](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L85)

___

### getMatchesByTeam

▸ **getMatchesByTeam**(`team`): [`Match`](Match.md)[]

gets matches by team

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | `number` \| [`Team`](Team.md)<`any`\> |

#### Returns

[`Match`](Match.md)[]

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[getMatchesByTeam](../interfaces/StorageBackend.md#getmatchesbyteam)

#### Defined in

[storage/json.ts:102](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L102)

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

[storage/json.ts:72](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L72)

___

### registerPlan

▸ **registerPlan**(`plan`): `void`

register a plan

#### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`JSONStoragePlan`](../interfaces/JSONStoragePlan.md)<[`Match`](Match.md)\> |

#### Returns

`void`

#### Defined in

[storage/json.ts:50](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L50)

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

[storage/json.ts:67](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L67)

___

### saveTeam

▸ **saveTeam**(`team`): `void`

saves a team

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | [`Team`](Team.md)<[`Match`](Match.md)\> |

#### Returns

`void`

#### Implementation of

[StorageBackend](../interfaces/StorageBackend.md).[saveTeam](../interfaces/StorageBackend.md#saveteam)

#### Defined in

[storage/json.ts:55](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L55)

___

### toString

▸ **toString**(): `string`

String representation

#### Returns

`string`

#### Defined in

[storage/json.ts:180](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/json.ts#L180)
