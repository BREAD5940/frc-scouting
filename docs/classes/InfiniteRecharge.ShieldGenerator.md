[frc-scouting](../README.md) / [Exports](../modules.md) / [InfiniteRecharge](../modules/InfiniteRecharge.md) / ShieldGenerator

# Class: ShieldGenerator

[InfiniteRecharge](../modules/InfiniteRecharge.md).ShieldGenerator

Represents the central Shield Generator.
Includes Endgame bonus point stuff (which I don't fully understand).

## Hierarchy

- [`GamePieceTracker`](GamePieceTracker.md)

  ↳ **`ShieldGenerator`**

## Table of contents

### Constructors

- [constructor](InfiniteRecharge.ShieldGenerator.md#constructor)

### Properties

- [floorBots](InfiniteRecharge.ShieldGenerator.md#floorbots)
- [hangingBots](InfiniteRecharge.ShieldGenerator.md#hangingbots)
- [isLevel](InfiniteRecharge.ShieldGenerator.md#islevel)

### Accessors

- [rankingPoints](InfiniteRecharge.ShieldGenerator.md#rankingpoints)
- [totalPoints](InfiniteRecharge.ShieldGenerator.md#totalpoints)

## Constructors

### constructor

• **new ShieldGenerator**(`hangingBots`, `floorBots`, `isLevel`)

construction owo

#### Parameters

| Name | Type |
| :------ | :------ |
| `hangingBots` | `HABLevel` |
| `floorBots` | `HABLevel` |
| `isLevel` | `boolean` |

#### Overrides

[GamePieceTracker](GamePieceTracker.md).[constructor](GamePieceTracker.md#constructor)

#### Defined in

games/infinite-recharge.ts:115

## Properties

### floorBots

• **floorBots**: `HABLevel`

#### Defined in

games/infinite-recharge.ts:110

___

### hangingBots

• **hangingBots**: `HABLevel`

#### Defined in

games/infinite-recharge.ts:109

___

### isLevel

• **isLevel**: `boolean`

#### Defined in

games/infinite-recharge.ts:112

## Accessors

### rankingPoints

• `get` **rankingPoints**(): `number`

gets total ranking points

#### Returns

`number`

#### Overrides

GamePieceTracker.rankingPoints

#### Defined in

games/infinite-recharge.ts:130

___

### totalPoints

• `get` **totalPoints**(): `number`

total points

#### Returns

`number`

#### Overrides

GamePieceTracker.totalPoints

#### Defined in

games/infinite-recharge.ts:125
