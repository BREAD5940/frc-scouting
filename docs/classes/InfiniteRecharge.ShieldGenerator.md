[@bread5940/frc-scouting](../README.md) / [Exports](../modules.md) / [InfiniteRecharge](../modules/InfiniteRecharge.md) / ShieldGenerator

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
| `hangingBots` | `NumberOfBots` |
| `floorBots` | `NumberOfBots` |
| `isLevel` | `boolean` |

#### Overrides

[GamePieceTracker](GamePieceTracker.md).[constructor](GamePieceTracker.md#constructor)

#### Defined in

[games/infinite-recharge/index.ts:115](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/games/infinite-recharge/index.ts#L115)

## Properties

### floorBots

• **floorBots**: `NumberOfBots`

#### Defined in

[games/infinite-recharge/index.ts:110](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/games/infinite-recharge/index.ts#L110)

___

### hangingBots

• **hangingBots**: `NumberOfBots`

#### Defined in

[games/infinite-recharge/index.ts:109](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/games/infinite-recharge/index.ts#L109)

___

### isLevel

• **isLevel**: `boolean`

#### Defined in

[games/infinite-recharge/index.ts:112](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/games/infinite-recharge/index.ts#L112)

## Accessors

### rankingPoints

• `get` **rankingPoints**(): `number`

gets total ranking points

#### Returns

`number`

#### Overrides

GamePieceTracker.rankingPoints

#### Defined in

[games/infinite-recharge/index.ts:130](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/games/infinite-recharge/index.ts#L130)

___

### totalPoints

• `get` **totalPoints**(): `number`

total points

#### Returns

`number`

#### Overrides

GamePieceTracker.totalPoints

#### Defined in

[games/infinite-recharge/index.ts:125](https://github.com/BREAD5940/frc-scouting/blob/5ba52e8/src/games/infinite-recharge/index.ts#L125)
