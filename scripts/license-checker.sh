#!/bin/sh
set -e

src=$(npx license-checker --production --unknown --json)
echo "$src" > list.json

node ./scripts/license-checker.js list.json

if [  $? -eq 1 ]; then
  rm -rf list.json
  exit 1
fi

rm -rf list.json
exit 0

