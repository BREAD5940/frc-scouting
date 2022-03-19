[frc-scouting](../README.md) / [Exports](../modules.md) / RapidReact

# Namespace: RapidReact

## Table of contents

### Enumerations

- [MonkeyBarState](../enums/RapidReact.MonkeyBarState.md)

### Classes

- [MonkeyBarTracker](../classes/RapidReact.MonkeyBarTracker.md)
- [RapidReactMatch](../classes/RapidReact.RapidReactMatch.md)
- [RapidReactSQL](../classes/RapidReact.RapidReactSQL.md)

### Interfaces

- [Shots](../interfaces/RapidReact.Shots.md)

### Functions

- [allianceRapidReactRP](RapidReact.md#alliancerapidreactrp)

## Functions

### allianceRapidReactRP

▸ **allianceRapidReactRP**(`teams`): `number`

Since Rapid React's ranking points are based on the alliance's performance,
rather than any individual robot, this function calculates an *alliance's* ranking points.

`teams` should be an array of matches: one for each robot on the alliance in the given match

#### Parameters

| Name | Type |
| :------ | :------ |
| `teams` | [`RapidReactMatch`](../classes/RapidReact.RapidReactMatch.md)[] |

#### Returns

`number`

#### Defined in

[games/rapid-react/index.ts:129](https://github.com/BREAD5940/frc-scouting/blob/a48c676/src/games/rapid-react/index.ts#L129)
