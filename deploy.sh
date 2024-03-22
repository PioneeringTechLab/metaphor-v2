#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

git subtree push --prefix docs/.vuepress/dist origin gh-pages
