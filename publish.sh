#!/usr/bin/env bash
# Publishes a new version of the frc-scouting package
# Currently, only Annika has sufficient permissions to run this script
# If you're someone else, you should ask her to publish it!

set -o errexit
set -o errtrace
set -o nounset
set -o pipefail

echo "Running tests and checks..."
npm test
echo "Publishing to NPM..."
npm publish
echo "Publishing to GitHub Packages..."
npm publish --registry=https://npm.pkg.github.com
echo "Done!"
