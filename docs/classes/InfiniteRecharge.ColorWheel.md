[frc-scouting](../README.md) / [Exports](../modules.md) / [InfiniteRecharge](../modules/InfiniteRecharge.md) / ColorWheel

# Class: ColorWheel

[InfiniteRecharge](../modules/InfiniteRecharge.md).ColorWheel

Represents the color wheel in Infinite Recharge

## Hierarchy

- [`GamePieceTracker`](GamePieceTracker.md)

  ↳ **`ColorWheel`**

## Table of contents

### Constructors

- [constructor](InfiniteRecharge.ColorWheel.md#constructor)

### Properties

- [rankingPoints](InfiniteRecharge.ColorWheel.md#rankingpoints)
- [state](InfiniteRecharge.ColorWheel.md#state)

### Accessors

- [totalPoints](InfiniteRecharge.ColorWheel.md#totalpoints)

## Constructors

### constructor

• **new ColorWheel**(`state`, `cells?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | ``null`` \| `ColorWheelPosition` | - |
| `cells?` | [`PowerCellTracker`](InfiniteRecharge.PowerCellTracker.md) | PowerCellTracker for validation |

#### Overrides

[GamePieceTracker](GamePieceTracker.md).[constructor](GamePieceTracker.md#constructor)

#### Defined in

[games/infinite-recharge/index.ts:75](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/infinite-recharge/index.ts#L75)

## Properties

### rankingPoints

• **rankingPoints**: `number` = `0`

#### Overrides

[GamePieceTracker](GamePieceTracker.md).[rankingPoints](GamePieceTracker.md#rankingpoints)

#### Defined in

[games/infinite-recharge/index.ts:70](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/infinite-recharge/index.ts#L70)

___

### state

• **state**: ``null`` \| `ColorWheelPosition`

null = no special state

#### Defined in

[games/infinite-recharge/index.ts:69](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/infinite-recharge/index.ts#L69)

## Accessors

### totalPoints

• `get` **totalPoints**(): `number`

gets total points

#### Returns

`number`

#### Overrides

GamePieceTracker.totalPoints

#### Defined in

[games/infinite-recharge/index.ts:92](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/infinite-recharge/index.ts#L92)
