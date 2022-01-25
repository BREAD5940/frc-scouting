[@bread5940/frc-scouting](../README.md) / [Exports](../modules.md) / [DeepSpace](../modules/DeepSpace.md) / DeepSpaceJSON

# Class: DeepSpaceJSON

[DeepSpace](../modules/DeepSpace.md).DeepSpaceJSON

Stores Deep Space matches in JSON

## Implements

- [`JSONStoragePlan`](../interfaces/JSONStoragePlan.md)<[`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)\>

## Table of contents

### Constructors

- [constructor](DeepSpace.DeepSpaceJSON.md#constructor)

### Methods

- [applies](DeepSpace.DeepSpaceJSON.md#applies)
- [dataToMatch](DeepSpace.DeepSpaceJSON.md#datatomatch)

## Constructors

### constructor

• **new DeepSpaceJSON**()

## Methods

### applies

▸ **applies**(`data`): `boolean`

Checks if this storage plan applies

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Implementation of

[JSONStoragePlan](../interfaces/JSONStoragePlan.md).[applies](../interfaces/JSONStoragePlan.md#applies)

#### Defined in

[games/deep-space/index.ts:269](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/games/deep-space/index.ts#L269)

___

### dataToMatch

▸ **dataToMatch**(`data`): [`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)

JSON => Match

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DeepSpaceMatch`](DeepSpace.DeepSpaceMatch.md)

#### Implementation of

[JSONStoragePlan](../interfaces/JSONStoragePlan.md).[dataToMatch](../interfaces/JSONStoragePlan.md#datatomatch)

#### Defined in

[games/deep-space/index.ts:276](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/games/deep-space/index.ts#L276)
