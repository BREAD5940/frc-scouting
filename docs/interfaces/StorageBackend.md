[frc-scouting](../README.md) / [Exports](../modules.md) / StorageBackend

# Interface: StorageBackend

## Implemented by

- [`JSONBackend`](../classes/JSONBackend.md)
- [`SQLBackend`](../classes/SQLBackend.md)

## Table of contents

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

storage/backend.ts:30

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

storage/backend.ts:31

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

storage/backend.ts:13

___

### getMatchByNumber

▸ **getMatchByNumber**(`number`): ``null`` \| [`Match`](../classes/Match.md)

Get only one match from a given match number.

**`deprecated`** Use getMatchesByNumber instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

``null`` \| [`Match`](../classes/Match.md)

#### Defined in

storage/backend.ts:23

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

storage/backend.ts:17

___

### getMatchesByTeam

▸ **getMatchesByTeam**(`team`): [`Match`](../classes/Match.md)[]

Gets matches ASSOCIATED with the team (i.e. as part of the team, not just any match scouted for that team)
I don't know what the desired behavior is here, and if we deprecate JSON crap it'd be easier to make it do
what we actually want.

#### Parameters

| Name | Type |
| :------ | :------ |
| `team` | `number` \| [`Team`](../classes/Team.md)<[`Match`](../classes/Match.md)\> |

#### Returns

[`Match`](../classes/Match.md)[]

#### Defined in

storage/backend.ts:29

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

storage/backend.ts:12

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

storage/backend.ts:15

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

storage/backend.ts:11