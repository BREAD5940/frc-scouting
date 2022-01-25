[@bread5940/frc-scouting](../README.md) / [Exports](../modules.md) / [InfiniteRecharge](../modules/InfiniteRecharge.md) / InfiniteRechargeJSON

# Class: InfiniteRechargeJSON

[InfiniteRecharge](../modules/InfiniteRecharge.md).InfiniteRechargeJSON

Stores Infinite Rhttps://github.com/TheAnnalyst/scouting-frontendecharge matches as JSON

## Implements

- [`JSONStoragePlan`](../interfaces/JSONStoragePlan.md)<[`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)\>

## Table of contents

### Constructors

- [constructor](InfiniteRecharge.InfiniteRechargeJSON.md#constructor)

### Methods

- [applies](InfiniteRecharge.InfiniteRechargeJSON.md#applies)
- [dataToMatch](InfiniteRecharge.InfiniteRechargeJSON.md#datatomatch)

## Constructors

### constructor

• **new InfiniteRechargeJSON**()

## Methods

### applies

▸ **applies**(`data`): `any`

Checks if it applies

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`any`

#### Implementation of

[JSONStoragePlan](../interfaces/JSONStoragePlan.md).[applies](../interfaces/JSONStoragePlan.md#applies)

#### Defined in

[games/infinite-recharge/index.ts:310](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/games/infinite-recharge/index.ts#L310)

___

### dataToMatch

▸ **dataToMatch**(`data`): [`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)

JSON => match

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`InfiniteRechargeMatch`](InfiniteRecharge.InfiniteRechargeMatch.md)

#### Implementation of

[JSONStoragePlan](../interfaces/JSONStoragePlan.md).[dataToMatch](../interfaces/JSONStoragePlan.md#datatomatch)

#### Defined in

[games/infinite-recharge/index.ts:319](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/games/infinite-recharge/index.ts#L319)
