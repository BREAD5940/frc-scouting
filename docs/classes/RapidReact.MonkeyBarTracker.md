[frc-scouting](../README.md) / [Exports](../modules.md) / [RapidReact](../modules/RapidReact.md) / MonkeyBarTracker

# Class: MonkeyBarTracker

[RapidReact](../modules/RapidReact.md).MonkeyBarTracker

Tracks a robot's climb status

## Implements

- [`GamePieceTracker`](GamePieceTracker.md)

## Table of contents

### Constructors

- [constructor](RapidReact.MonkeyBarTracker.md#constructor)

### Properties

- [state](RapidReact.MonkeyBarTracker.md#state)

### Accessors

- [rankingPoints](RapidReact.MonkeyBarTracker.md#rankingpoints)
- [totalPoints](RapidReact.MonkeyBarTracker.md#totalpoints)

## Constructors

### constructor

• **new MonkeyBarTracker**(`state`)

Creates a MonkeyBarTracker

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`MonkeyBarState`](../enums/RapidReact.MonkeyBarState.md) |

#### Defined in

[games/rapid-react/index.ts:30](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/rapid-react/index.ts#L30)

## Properties

### state

• **state**: [`MonkeyBarState`](../enums/RapidReact.MonkeyBarState.md)

#### Defined in

[games/rapid-react/index.ts:27](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/rapid-react/index.ts#L27)

## Accessors

### rankingPoints

• `get` **rankingPoints**(): `number`

RP getter

#### Returns

`number`

#### Implementation of

GamePieceTracker.rankingPoints

#### Defined in

[games/rapid-react/index.ts:53](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/rapid-react/index.ts#L53)

___

### totalPoints

• `get` **totalPoints**(): `number`

Gets the total number of points scored from climbing for this robot

#### Returns

`number`

#### Implementation of

GamePieceTracker.totalPoints

#### Defined in

[games/rapid-react/index.ts:35](https://github.com/BREAD5940/frc-scouting/blob/c1beda6/src/games/rapid-react/index.ts#L35)
