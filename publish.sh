#!/usr/bin/env bash

npm test
cp src/games/deep-space.sql built/games/deep-space.sql
npm publish
