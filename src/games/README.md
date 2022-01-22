# Games

`frc-scouting` is intended to be fairly easily extended; to add a new game, you must create a TypeScript file in this folder describing the game (ideally with tests; see `deep-space/index.ts` for an example).

You must also add support to at least one storage backend; in this case, `deep-space/schema.sql` contains a schema to store Deep Space games (every game has its own database).
