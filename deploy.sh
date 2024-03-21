#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build


# Add the built assets to the master branch
git add docs
git commit -m "Push out a new update."
git push

# create a new version of the gh-pages branch
git subtree split --branch gh-pages --prefix docs/.vuepress/dist/

# switch to newly created branch and push
git checkout gh-pages
git push

# go back to master branch
git checkout -
