# Changelog

### v0.3.0
- Teams no longer have their own SQL table; you will need to `DROP COLUMN associated_team` on your `matches` tables if you use SQLite as a backend.
  - Many methods that work with teams have been removed; instead, manipulate matches.
- The JSON backend is no longer supported; it may work but should not be relied upon in production. SQLite is simple enough to install and set up that it should not present a barrier to usage
- As per the [semver specification](https://semver.org/), "[the] major version zero (0.y.z) is for initial development ... [t]he public API SHOULD NOT be considered stable." Thus, this **breaking change** does not necessitate a v1 release.
- `StorageBackend#getMatchByNumber` has been removed.

### v0.2.0
- Support TypeScript 4.4 and Node.js versions 16.x and 17.x
- Add `StorageBackend#getMatchesByNumber` and support associating multiple `Match` objects with one match
  - SQLite makes it difficult to drop constraints, so you'll need to migrate your data if you used the SQLite backend and want to store multiple scouted teams per match
- Deprecate `StorageBackend#getMatchByNumber`
### v0.1.1
- Fixed bugs with the JSON storage backend

### v0.1.0
- Fixed a bug in 0.0.5's dependencies
- (v0.0.5 should've been 0.1.x per semver... oops!)

### v0.0.5
- Added beta support for Infinite Recharge
- Properly awarded ranking points for crossing the start line in auto
- Improved support for ranking points
- Renamed the `autonomous` mode to `auto`
- Added some more unit tests

### v0.0.4
- The first usable release
- Supported JSON and SQLite storage backends
- Supported only Deep Space as a game
