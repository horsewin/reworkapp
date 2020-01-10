#!/bin/sh
set -ex

# バージョン情報の取得と生成
version=$(cat ./package.json | jq -r .version)

major=$(echo ${version} | cut -d . -f 1)
minor=$(echo ${version} | cut -d . -f 2)
patch=$(echo ${version} | cut -d . -f 3 | cut -d - -f 1)
build=$(echo ${version} | cut -d d -f 2)

if [ $1 = "prod" ]; then
  minor=`expr ${minor} + 1`
  patch=0
else
  patch=`expr ${patch} + 1`
fi

NEW_VERSION_NAME="${major}.${minor}.${patch}"

echo ${NEW_VERSION_NAME} > version.json
