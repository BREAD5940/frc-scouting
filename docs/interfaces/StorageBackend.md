[frc-scouting](../README.md) / [Exports](../modules.md) / StorageBackend

# Interface: StorageBackend

## Implemented by

- [`JSONBackend`](../classes/JSONBackend.md)
- [`SQLBackend`](../classes/SQLBackend.md)

## Table of contents

### Properties

- [hooks](StorageBackend.md#hooks)

### Methods

- [deleteMatchByNumber](StorageBackend.md#deletematchbynumber)
- [deleteMatchesByTeam](StorageBackend.md#deletematchesbyteam)
- [deleteTeam](StorageBackend.md#deleteteam)
- [getMatchByNumber](StorageBackend.md#getmatchbynumber)
- [getMatchesByNumber](StorageBackend.md#getmatchesbynumber)
- [getMatchesByTeam](StorageBackend.md#getmatchesbyteam)
- [getTeam](StorageBackend.md#getteam)
- [saveMatch](StorageBackend.md#savematch)
- [saveTeam](StorageBackend.md#saveteam)

## Properties

### hooks

• **hooks**: `Partial`<`StorageHooks`\>

#### Defined in

[storage/backend.ts:31](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/backend.ts#L31)

## Methods

### deleteMatchByNumber

▸ **deleteMatchByNumber**(`number`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`void`

#### Defined in

[storage/backend.ts:42](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/backend.ts#L42)

___

### deleteMatchesByTeam

▸ **deleteMatchesByTeam**(`team`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | `number` \| [`Team`](../classes/Team.md)<[`Match`](../classes/Match.md)\> |

#### Returns

`void`

#### Defined in

[storage/backend.ts:43](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/backend.ts#L43)

___

### deleteTeam

▸ **deleteTeam**(`team`, `deleteMatches?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | `number` \| [`Team`](../classes/Team.md)<[`Match`](../classes/Match.md)\> |
| `deleteMatches?` | `boolean` |

#### Returns

`void`

#### Defined in

[storage/backend.ts:35](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/backend.ts#L35)

___

### getMatchByNumber

▸ **getMatchByNumber**(`number`): ``null`` \| [`Match`](../classes/Match.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

``null`` \| [`Match`](../classes/Match.md)

#### Defined in

[storage/backend.ts:40](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/backend.ts#L40)

___

### getMatchesByNumber

▸ **getMatchesByNumber**(`number`): [`Match`](../classes/Match.md)[]

Get all match data for a given match number

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

[`Match`](../classes/Match.md)[]

#### Defined in

[storage/backend.ts:39](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/backend.ts#L39)

___

### getMatchesByTeam

▸ **getMatchesByTeam**(`team`): [`Match`](../classes/Match.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | `number` \| [`Team`](../classes/Team.md)<[`Match`](../classes/Match.md)\> |

#### Returns

[`Match`](../classes/Match.md)[]

#### Defined in

[storage/backend.ts:41](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/backend.ts#L41)

___

### getTeam

▸ **getTeam**(`number`): ``null`` \| [`Team`](../classes/Team.md)<[`Match`](../classes/Match.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

``null`` \| [`Team`](../classes/Team.md)<[`Match`](../classes/Match.md)\>

#### Defined in

[storage/backend.ts:34](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/backend.ts#L34)

___

### saveMatch

▸ **saveMatch**(`match`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `match` | [`Match`](../classes/Match.md) |

#### Returns

`void`

#### Defined in

[storage/backend.ts:37](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/backend.ts#L37)

___

### saveTeam

▸ **saveTeam**(`team`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | [`Team`](../classes/Team.md)<[`Match`](../classes/Match.md)\> |

#### Returns

`void`

#### Defined in

[storage/backend.ts:33](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/storage/backend.ts#L33)
