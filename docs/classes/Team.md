[frc-scouting](../README.md) / [Exports](../modules.md) / Team

# Class: Team<T\>

Represents a FRC team

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Match`](Match.md) |

## Table of contents

### Constructors

- [constructor](Team.md#constructor)

### Properties

- [matches](Team.md#matches)
- [number](Team.md#number)

### Methods

- [addMatches](Team.md#addmatches)
- [getMean](Team.md#getmean)
- [getMedian](Team.md#getmedian)
- [getMode](Team.md#getmode)

## Constructors

### constructor

• **new Team**<`T`\>(`number`, ...`matches`)

Instantiates a new team.
TODO: support passing in match numbers and looking them up from the DB

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Match`](Match.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |
| `...matches` | `T`[] |

#### Defined in

[team.ts:19](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/team.ts#L19)

## Properties

### matches

• **matches**: `T`[]

the matches that the team played in

#### Defined in

[team.ts:13](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/team.ts#L13)

___

### number

• **number**: `number`

#### Defined in

[team.ts:11](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/team.ts#L11)

## Methods

### addMatches

▸ **addMatches**(...`matches`): `void`

Adds a match to the team

#### Parameters

| Name | Type |
| :------ | :------ |
| `...matches` | `T`[] |

#### Returns

`void`

#### Defined in

[team.ts:73](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/team.ts#L73)

___

### getMean

▸ **getMean**(`property`): `number`

Gets the mean of any match property

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | keyof `T` |

#### Returns

`number`

#### Defined in

[team.ts:25](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/team.ts#L25)

___

### getMedian

▸ **getMedian**(`property`): `number`

Gets the median of any match property

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | keyof [`Match`](Match.md) |

#### Returns

`number`

#### Defined in

[team.ts:53](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/team.ts#L53)

___

### getMode

▸ **getMode**(`property`): `number`

Gets the mode of any match property

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | keyof `T` |

#### Returns

`number`

#### Defined in

[team.ts:35](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/team.ts#L35)
