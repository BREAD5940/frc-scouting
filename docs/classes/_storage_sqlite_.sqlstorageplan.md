**[frc-scouting](../README.md)**

> [Globals](../globals.md) / ["storage/sqlite"](../modules/_storage_sqlite_.md) / SQLStoragePlan

# Class: SQLStoragePlan\<T>

An interface that describes how to store data in SQL.
Each game (Deep Space, Infinite Recharge, etc.) should implement this.

## Type parameters

Name | Type |
------ | ------ |
`T` | [Match](_match_.match.md) |

## Hierarchy

* **SQLStoragePlan**

  ↳ [DeepSpaceSQL](_games_deep_space_.deepspacesql.md)

## Index

### Constructors

* [constructor](_storage_sqlite_.sqlstorageplan.md#constructor)

### Properties

* [database](_storage_sqlite_.sqlstorageplan.md#database)
* [statementCache](_storage_sqlite_.sqlstorageplan.md#statementcache)

### Methods

* [applies](_storage_sqlite_.sqlstorageplan.md#applies)
* [dbDataToMatch](_storage_sqlite_.sqlstorageplan.md#dbdatatomatch)
* [dbDataToTeam](_storage_sqlite_.sqlstorageplan.md#dbdatatoteam)
* [deleteMatches](_storage_sqlite_.sqlstorageplan.md#deletematches)
* [deleteTeams](_storage_sqlite_.sqlstorageplan.md#deleteteams)
* [getMatches](_storage_sqlite_.sqlstorageplan.md#getmatches)
* [getStatement](_storage_sqlite_.sqlstorageplan.md#getstatement)
* [getTeams](_storage_sqlite_.sqlstorageplan.md#getteams)
* [insertMatch](_storage_sqlite_.sqlstorageplan.md#insertmatch)
* [insertTeam](_storage_sqlite_.sqlstorageplan.md#insertteam)

## Constructors

### constructor

\+ **new SQLStoragePlan**(`absolutePath`: string): [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md)

*Defined in storage/sqlite.ts:19*

Creates a new storage plan

#### Parameters:

Name | Type |
------ | ------ |
`absolutePath` | string |

**Returns:** [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md)

## Properties

### database

•  **database**: Database.Database

*Defined in storage/sqlite.ts:18*

___

### statementCache

•  **statementCache**: Map\<string, Database.Statement> = new Map()

*Defined in storage/sqlite.ts:19*

## Methods

### applies

▸ `Abstract`**applies**(`match`: [Match](_match_.match.md)): boolean

*Defined in storage/sqlite.ts:51*

Returns true if the match can be stored with this interface and false otherwise.

#### Parameters:

Name | Type |
------ | ------ |
`match` | [Match](_match_.match.md) |

**Returns:** boolean

___

### dbDataToMatch

▸ `Abstract`**dbDataToMatch**(`data`: any): T

*Defined in storage/sqlite.ts:47*

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |

**Returns:** T

___

### dbDataToTeam

▸ `Abstract`**dbDataToTeam**(`data`: any): [Team](_team_.team.md)\<T>

*Defined in storage/sqlite.ts:48*

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |

**Returns:** [Team](_team_.team.md)\<T>

___

### deleteMatches

▸ **deleteMatches**(`conditions`: { column: string ; value: string \| number  }[]): void

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

*Defined in storage/sqlite.ts:73*

gets teams

#### Parameters:

Name | Type |
------ | ------ |
`conditions` | { column: string ; value: string \| number  }[] |

**Returns:** [Team](_team_.team.md)\<T>[]

___

### insertMatch

▸ `Abstract`**insertMatch**(`match`: T): void

*Defined in storage/sqlite.ts:54*

Inserts match

#### Parameters:

Name | Type |
------ | ------ |
`match` | T |

**Returns:** void

___

### insertTeam

▸ `Abstract`**insertTeam**(`team`: [Team](_team_.team.md)\<T>): void

*Defined in storage/sqlite.ts:71*

Inserts team

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](_team_.team.md)\<T> |

**Returns:** void
