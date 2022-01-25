[@bread5940/frc-scouting](../README.md) / [Exports](../modules.md) / StorageBackend

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

[storage/backend.ts:20](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/backend.ts#L20)

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

[storage/backend.ts:21](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/backend.ts#L21)

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

[storage/backend.ts:13](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/backend.ts#L13)

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

[storage/backend.ts:18](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/backend.ts#L18)

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

[storage/backend.ts:17](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/backend.ts#L17)

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

[storage/backend.ts:19](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/backend.ts#L19)

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

[storage/backend.ts:12](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/backend.ts#L12)

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

[storage/backend.ts:15](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/backend.ts#L15)

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

[storage/backend.ts:11](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/storage/backend.ts#L11)
