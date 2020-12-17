**[@theannalyst/frc-scouting](../README.md)**

> [Globals](../globals.md) / ["storage/json"](../modules/_storage_json_.md) / JSONStoragePlan

# Interface: JSONStoragePlan\<T>

Plans out how to store a match of a given game as JSON.

## Type parameters

Name | Type |
------ | ------ |
`T` | [Match](../classes/_match_.match.md) |

## Hierarchy

* **JSONStoragePlan**

## Implemented by

* [DeepSpaceJSON](../classes/_games_deep_space_.deepspacejson.md)
* [InfiniteRechargeJSON](../classes/_games_infinite_recharge_.infiniterechargejson.md)

## Index

### Methods

* [applies](_storage_json_.jsonstorageplan.md#applies)
* [dataToMatch](_storage_json_.jsonstorageplan.md#datatomatch)

## Methods

### applies

▸ **applies**(`data`: any): boolean

*Defined in storage/json.ts:18*

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |

**Returns:** boolean

___

### dataToMatch

▸ **dataToMatch**(`data`: any): T

*Defined in storage/json.ts:19*

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |

**Returns:** T
