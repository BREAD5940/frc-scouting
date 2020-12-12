**[@theannalyst/frc-scouting](../README.md)**

> [Globals](../globals.md) / ["games/deep-space"](../modules/_games_deep_space_.md) / DeepSpaceSQL

# Class: DeepSpaceSQL

Stores Deep Space teams/matches in SQLite

## Hierarchy

* [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md)\<[DeepSpaceMatch](_games_deep_space_.deepspacematch.md)>

  ↳ **DeepSpaceSQL**

## Index

### Constructors

* [constructor](_games_deep_space_.deepspacesql.md#constructor)

### Properties

* [database](_games_deep_space_.deepspacesql.md#database)
* [matchInsertionTransaction](_games_deep_space_.deepspacesql.md#matchinsertiontransaction)
* [statementCache](_games_deep_space_.deepspacesql.md#statementcache)

### Methods

* [applies](_games_deep_space_.deepspacesql.md#applies)
* [dbDataToMatch](_games_deep_space_.deepspacesql.md#dbdatatomatch)
* [dbDataToTeam](_games_deep_space_.deepspacesql.md#dbdatatoteam)
* [deleteMatches](_games_deep_space_.deepspacesql.md#deletematches)
* [deleteTeams](_games_deep_space_.deepspacesql.md#deleteteams)
* [getMatches](_games_deep_space_.deepspacesql.md#getmatches)
* [getStatement](_games_deep_space_.deepspacesql.md#getstatement)
* [getTeams](_games_deep_space_.deepspacesql.md#getteams)
* [insertMatch](_games_deep_space_.deepspacesql.md#insertmatch)
* [insertTeam](_games_deep_space_.deepspacesql.md#insertteam)

## Constructors

### constructor

\+ **new DeepSpaceSQL**(`absolutePath`: string): [DeepSpaceSQL](_games_deep_space_.deepspacesql.md)

*Overrides [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[constructor](_storage_sqlite_.sqlstorageplan.md#constructor)*

*Defined in games/deep-space.ts:157*

constructor

#### Parameters:

Name | Type |
------ | ------ |
`absolutePath` | string |

**Returns:** [DeepSpaceSQL](_games_deep_space_.deepspacesql.md)

## Properties

### database

•  **database**: Database.Database

*Inherited from [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[database](_storage_sqlite_.sqlstorageplan.md#database)*

*Defined in storage/sqlite.ts:18*

___

### matchInsertionTransaction

•  **matchInsertionTransaction**: Transaction

*Defined in games/deep-space.ts:157*

___

### statementCache

•  **statementCache**: Map\<string, Database.Statement> = new Map()

*Inherited from [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[statementCache](_storage_sqlite_.sqlstorageplan.md#statementcache)*

*Defined in storage/sqlite.ts:19*

## Methods

### applies

▸ **applies**(`match`: [Match](_match_.match.md)): boolean

*Overrides [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[applies](_storage_sqlite_.sqlstorageplan.md#applies)*

*Defined in games/deep-space.ts:204*

Determines whether a match can be stored by this storage plan.

#### Parameters:

Name | Type |
------ | ------ |
`match` | [Match](_match_.match.md) |

**Returns:** boolean

___

### dbDataToMatch

▸ **dbDataToMatch**(`data`: any): [DeepSpaceMatch](_games_deep_space_.deepspacematch.md)

*Overrides [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[dbDataToMatch](_storage_sqlite_.sqlstorageplan.md#dbdatatomatch)*

*Defined in games/deep-space.ts:209*

Converts data from the database to a Match

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |

**Returns:** [DeepSpaceMatch](_games_deep_space_.deepspacematch.md)

___

### dbDataToTeam

▸ **dbDataToTeam**(`data`: any): [Team](_team_.team.md)\<[DeepSpaceMatch](_games_deep_space_.deepspacematch.md)>

*Overrides [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[dbDataToTeam](_storage_sqlite_.sqlstorageplan.md#dbdatatoteam)*

*Defined in games/deep-space.ts:260*

Converts data from the database into a team

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |

**Returns:** [Team](_team_.team.md)\<[DeepSpaceMatch](_games_deep_space_.deepspacematch.md)>

___

### deleteMatches

▸ **deleteMatches**(`conditions`: { column: string ; value: string \| number  }[]): void

*Inherited from [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[deleteMatches](_storage_sqlite_.sqlstorageplan.md#deletematches)*

*Defined in storage/sqlite.ts:63*

deletes matches

#### Parameters:

Name | Type |
------ | ------ |
`conditions` | { column: string ; value: string \| number  }[] |

**Returns:** void

___

### deleteTeams

▸ **deleteTeams**(`conditions`: { column: string ; value: string \| number  }[]): void

*Inherited from [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[deleteTeams](_storage_sqlite_.sqlstorageplan.md#deleteteams)*

*Defined in storage/sqlite.ts:80*

deletes teams

#### Parameters:

Name | Type |
------ | ------ |
`conditions` | { column: string ; value: string \| number  }[] |

**Returns:** void

___

### getMatches

▸ **getMatches**(`conditions`: { column: string ; value: string \| number  }[]): T[]

*Inherited from [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[getMatches](_storage_sqlite_.sqlstorageplan.md#getmatches)*

*Defined in storage/sqlite.ts:56*

gets matches

#### Parameters:

Name | Type |
------ | ------ |
`conditions` | { column: string ; value: string \| number  }[] |

**Returns:** T[]

___

### getStatement

▸ **getStatement**(`query`: string): Database.Statement

*Inherited from [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[getStatement](_storage_sqlite_.sqlstorageplan.md#getstatement)*

*Defined in storage/sqlite.ts:38*

Gets the cached prepared statement, or generates it and adds it to the cache.

#### Parameters:

Name | Type |
------ | ------ |
`query` | string |

**Returns:** Database.Statement

___

### getTeams

▸ **getTeams**(`conditions`: { column: string ; value: string \| number  }[]): [Team](_team_.team.md)\<T>[]

*Inherited from [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[getTeams](_storage_sqlite_.sqlstorageplan.md#getteams)*

*Defined in storage/sqlite.ts:73*

gets teams

#### Parameters:

Name | Type |
------ | ------ |
`conditions` | { column: string ; value: string \| number  }[] |

**Returns:** [Team](_team_.team.md)\<T>[]

___

### insertMatch

▸ **insertMatch**(`match`: [DeepSpaceMatch](_games_deep_space_.deepspacematch.md)): void

*Overrides [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[insertMatch](_storage_sqlite_.sqlstorageplan.md#insertmatch)*

*Defined in games/deep-space.ts:269*

Inserts a match

#### Parameters:

Name | Type |
------ | ------ |
`match` | [DeepSpaceMatch](_games_deep_space_.deepspacematch.md) |

**Returns:** void

___

### insertTeam

▸ **insertTeam**(`team`: [Team](_team_.team.md)\<[DeepSpaceMatch](_games_deep_space_.deepspacematch.md)>): void

*Overrides [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[insertTeam](_storage_sqlite_.sqlstorageplan.md#insertteam)*

*Defined in games/deep-space.ts:274*

Inserts a team

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](_team_.team.md)\<[DeepSpaceMatch](_games_deep_space_.deepspacematch.md)> |

**Returns:** void
