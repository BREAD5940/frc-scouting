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
cp package.json package.json.old
sed -i '' 's/"name": "frc-scouting"/"name": "@bread5940\/frc-scouting"/g' package.json
cat package.json
npm publish --registry=https://npm.pkg.github.com
echo "Building documentation..."
npm install typedoc-plugin-markdown --force
npx typedoc
mv package.json.old package.json
echo "Done! Remember to create a new tag on GitHub :)"
