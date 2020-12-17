**[@theannalyst/frc-scouting](../README.md)**

> [Globals](../globals.md) / ["games/deep-space"](../modules/_games_deep_space_.md) / DeepSpaceJSON

# Class: DeepSpaceJSON

Stores Deep Space matches in JSON

## Hierarchy

* **DeepSpaceJSON**

## Implements

* [JSONStoragePlan](../interfaces/_storage_json_.jsonstorageplan.md)\<[DeepSpaceMatch](_games_deep_space_.deepspacematch.md)>

## Index

### Methods

* [applies](_games_deep_space_.deepspacejson.md#applies)
* [dataToMatch](_games_deep_space_.deepspacejson.md#datatomatch)

## Methods

### applies

▸ **applies**(`data`: any): boolean

*Implementation of [JSONStoragePlan](../interfaces/_storage_json_.jsonstorageplan.md)*

*Defined in games/deep-space.ts:288*

Checks if this storage plan applies

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |

**Returns:** boolean

___

### dataToMatch

▸ **dataToMatch**(`data`: any): [DeepSpaceMatch](_games_deep_space_.deepspacematch.md)

*Implementation of [JSONStoragePlan](../interfaces/_storage_json_.jsonstorageplan.md)*

*Defined in games/deep-space.ts:295*

JSON => Match

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |

**Returns:** [DeepSpaceMatch](_games_deep_space_.deepspacematch.md)
