#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build


# create a new version of the gh-pages branch
git subtree push --prefix docs/.vuepress/dist/ origin gh-pages
#git subtree push
# switch to newly created branch and push
#git checkout gh-pages
#git push

# go back to master branch
#git checkout -
