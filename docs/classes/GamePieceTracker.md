[@bread5940/frc-scouting](../README.md) / [Exports](../modules.md) / GamePieceTracker

# Class: GamePieceTracker

Abstract class to track game pieces

## Hierarchy

- **`GamePieceTracker`**

  ↳ [`PowerCellTracker`](InfiniteRecharge.PowerCellTracker.md)

  ↳ [`ColorWheel`](InfiniteRecharge.ColorWheel.md)

  ↳ [`ShieldGenerator`](InfiniteRecharge.ShieldGenerator.md)

## Table of contents

### Constructors

- [constructor](GamePieceTracker.md#constructor)

### Accessors

- [rankingPoints](GamePieceTracker.md#rankingpoints)
- [totalPoints](GamePieceTracker.md#totalpoints)

## Constructors

### constructor

• **new GamePieceTracker**()

## Accessors

### rankingPoints

• `Abstract` `get` **rankingPoints**(): `number`

Returns the total number of ranking points scored by the game piece

#### Returns

`number`

#### Defined in

[match.ts:24](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L24)

___

### totalPoints

• `Abstract` `get` **totalPoints**(): `number`

Returns the total number of points scored

#### Returns

`number`

#### Defined in

[match.ts:22](https://github.com/BREAD5940/frc-scouting/blob/4bb8602/src/match.ts#L22)
