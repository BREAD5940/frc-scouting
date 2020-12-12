**[@theannalyst/frc-scouting](../README.md)**

> [Globals](../globals.md) / ["games/infinite-recharge"](../modules/_games_infinite_recharge_.md) / InfiniteRechargeSQL

# Class: InfiniteRechargeSQL

Stores Infinite Recharge teams/matches in SQL

## Hierarchy

* [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md)\<[InfiniteRechargeMatch](_games_infinite_recharge_.infiniterechargematch.md)>

  ↳ **InfiniteRechargeSQL**

## Index

### Constructors

* [constructor](_games_infinite_recharge_.infiniterechargesql.md#constructor)

### Properties

* [database](_games_infinite_recharge_.infiniterechargesql.md#database)
* [matchInsertionTransaction](_games_infinite_recharge_.infiniterechargesql.md#matchinsertiontransaction)
* [statementCache](_games_infinite_recharge_.infiniterechargesql.md#statementcache)

### Methods

* [applies](_games_infinite_recharge_.infiniterechargesql.md#applies)
* [dbDataToMatch](_games_infinite_recharge_.infiniterechargesql.md#dbdatatomatch)
* [dbDataToTeam](_games_infinite_recharge_.infiniterechargesql.md#dbdatatoteam)
* [deleteMatches](_games_infinite_recharge_.infiniterechargesql.md#deletematches)
* [deleteTeams](_games_infinite_recharge_.infiniterechargesql.md#deleteteams)
* [getMatches](_games_infinite_recharge_.infiniterechargesql.md#getmatches)
* [getStatement](_games_infinite_recharge_.infiniterechargesql.md#getstatement)
* [getTeams](_games_infinite_recharge_.infiniterechargesql.md#getteams)
* [insertMatch](_games_infinite_recharge_.infiniterechargesql.md#insertmatch)
* [insertTeam](_games_infinite_recharge_.infiniterechargesql.md#insertteam)

## Constructors

### constructor

\+ **new InfiniteRechargeSQL**(`absolutePath`: string): [InfiniteRechargeSQL](_games_infinite_recharge_.infiniterechargesql.md)

*Overrides [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[constructor](_storage_sqlite_.sqlstorageplan.md#constructor)*

*Defined in games/infinite-recharge.ts:166*

it's a constructor, you absolutely incompetent dingus of a linter, shut up about JSDoc already

#### Parameters:

Name | Type |
------ | ------ |
`absolutePath` | string |

**Returns:** [InfiniteRechargeSQL](_games_infinite_recharge_.infiniterechargesql.md)

## Properties

### database

•  **database**: Database.Database

*Inherited from [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[database](_storage_sqlite_.sqlstorageplan.md#database)*

*Defined in storage/sqlite.ts:18*

___

### matchInsertionTransaction

•  **matchInsertionTransaction**: Transaction

*Defined in games/infinite-recharge.ts:166*

___

### statementCache

•  **statementCache**: Map\<string, Database.Statement> = new Map()

*Inherited from [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[statementCache](_storage_sqlite_.sqlstorageplan.md#statementcache)*

*Defined in storage/sqlite.ts:19*

## Methods

### applies

▸ **applies**(`match`: [Match](_match_.match.md)): boolean

*Overrides [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[applies](_storage_sqlite_.sqlstorageplan.md#applies)*

*Defined in games/infinite-recharge.ts:200*

Determines whether a match can be stored by this storage plan.

#### Parameters:

Name | Type |
------ | ------ |
`match` | [Match](_match_.match.md) |

**Returns:** boolean

___

### dbDataToMatch

▸ **dbDataToMatch**(`data`: any): [InfiniteRechargeMatch](_games_infinite_recharge_.infiniterechargematch.md)

*Overrides [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[dbDataToMatch](_storage_sqlite_.sqlstorageplan.md#dbdatatomatch)*

*Defined in games/infinite-recharge.ts:214*

Converts match data from the db into a match

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |

**Returns:** [InfiniteRechargeMatch](_games_infinite_recharge_.infiniterechargematch.md)

___

### dbDataToTeam

▸ **dbDataToTeam**(`data`: any): [Team](_team_.team.md)\<[InfiniteRechargeMatch](_games_infinite_recharge_.infiniterechargematch.md)>

*Overrides [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[dbDataToTeam](_storage_sqlite_.sqlstorageplan.md#dbdatatoteam)*

*Defined in games/infinite-recharge.ts:205*

Converts data from the database into a team

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |

**Returns:** [Team](_team_.team.md)\<[InfiniteRechargeMatch](_games_infinite_recharge_.infiniterechargematch.md)>

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

▸ **insertMatch**(`match`: [InfiniteRechargeMatch](_games_infinite_recharge_.infiniterechargematch.md)): void

*Overrides [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[insertMatch](_storage_sqlite_.sqlstorageplan.md#insertmatch)*

*Defined in games/infinite-recharge.ts:268*

Inserts a match

#### Parameters:

Name | Type |
------ | ------ |
`match` | [InfiniteRechargeMatch](_games_infinite_recharge_.infiniterechargematch.md) |

**Returns:** void

___

### insertTeam

▸ **insertTeam**(`team`: [Team](_team_.team.md)\<[InfiniteRechargeMatch](_games_infinite_recharge_.infiniterechargematch.md)>): void

*Overrides [SQLStoragePlan](_storage_sqlite_.sqlstorageplan.md).[insertTeam](_storage_sqlite_.sqlstorageplan.md#insertteam)*

*Defined in games/infinite-recharge.ts:273*

Inserts a team

#### Parameters:

Name | Type |
------ | ------ |
`team` | [Team](_team_.team.md)\<[InfiniteRechargeMatch](_games_infinite_recharge_.infiniterechargematch.md)> |

**Returns:** void
