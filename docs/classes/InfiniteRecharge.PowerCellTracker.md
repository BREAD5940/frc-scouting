[@bread5940/frc-scouting](../README.md) / [Exports](../modules.md) / [InfiniteRecharge](../modules/InfiniteRecharge.md) / PowerCellTracker

# Class: PowerCellTracker

[InfiniteRecharge](../modules/InfiniteRecharge.md).PowerCellTracker

Tracks a Power Cell

## Hierarchy

- [`GamePieceTracker`](GamePieceTracker.md)

  ↳ **`PowerCellTracker`**

## Table of contents

### Constructors

- [constructor](InfiniteRecharge.PowerCellTracker.md#constructor)

### Properties

- [colorWheelSpun](InfiniteRecharge.PowerCellTracker.md#colorwheelspun)
- [results](InfiniteRecharge.PowerCellTracker.md#results)

### Accessors

- [rankingPoints](InfiniteRecharge.PowerCellTracker.md#rankingpoints)
- [totalCells](InfiniteRecharge.PowerCellTracker.md#totalcells)
- [totalPoints](InfiniteRecharge.PowerCellTracker.md#totalpoints)

## Constructors

### constructor

• **new PowerCellTracker**(`results`, `colorWheelSpun`)

creates a new PowerCellTracker

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | `Record`<`PowerCellLocation`, `Object`\> |
| `colorWheelSpun` | `boolean` |

#### Overrides

[GamePieceTracker](GamePieceTracker.md).[constructor](GamePieceTracker.md#constructor)

#### Defined in

games/infinite-recharge.ts:35

## Properties

### colorWheelSpun

• **colorWheelSpun**: `boolean`

#### Defined in

games/infinite-recharge.ts:32

___

### results

• **results**: `Record`<`PowerCellLocation`, `Object`\>

#### Defined in

games/infinite-recharge.ts:31

## Accessors

### rankingPoints

• `get` **rankingPoints**(): `number`

rp

#### Returns

`number`

#### Overrides

GamePieceTracker.rankingPoints

#### Defined in

games/infinite-recharge.ts:59

___

### totalCells

• `get` **totalCells**(): `number`

the number of power cells scored

#### Returns

`number`

#### Defined in

games/infinite-recharge.ts:54

___

### totalPoints

• `get` **totalPoints**(): `number`

the total points scored

#### Returns

`number`

#### Overrides

GamePieceTracker.totalPoints

#### Defined in

games/infinite-recharge.ts:42
