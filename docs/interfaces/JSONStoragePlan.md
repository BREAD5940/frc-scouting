[frc-scouting](../README.md) / [Exports](../modules.md) / JSONStoragePlan

# Interface: JSONStoragePlan<T\>

Plans out how to store a match of a given game as JSON.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Match`](../classes/Match.md) |

## Implemented by

- [`DeepSpaceJSON`](../classes/DeepSpace.DeepSpaceJSON.md)
- [`InfiniteRechargeJSON`](../classes/InfiniteRecharge.InfiniteRechargeJSON.md)

## Table of contents

### Methods

- [applies](JSONStoragePlan.md#applies)
- [dataToMatch](JSONStoragePlan.md#datatomatch)

## Methods

### applies

▸ **applies**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[storage/json.ts:18](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/storage/json.ts#L18)

___

### dataToMatch

▸ **dataToMatch**(`data`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`T`

#### Defined in

[storage/json.ts:19](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/storage/json.ts#L19)
