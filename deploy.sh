#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

git add -A

git commit -m "Push out a new update."

git push

git subtree push --prefix docs/.vuepress/dist origin gh-pages
