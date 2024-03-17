# Metaphor v2

This is a custom Bootstrap 4 theme with CSUN branding.


## What this project does

This repository includes a project structure with a build script that builds a custom CSS version of Bootstrap 4 using Gulp.

Also included in this repository is the docs for MetaphorV2, which are [served up here](https://pioneeringtechlab.net/metaphor-v2/)
 using github pages and powered by [VuePress](https://vuepress.vuejs.org/).


## Prerequisites

- This works on Windows, macOS and Linux.
- Node Package Manager and Gulp are required. Make sure you can run `gulp -v` and `npm -v`.
- You can get Node at [nodejs.org](https://nodejs.org), then install gulp using `npm install gulp-cli -g`


## Getting started 

### Editing the booststrap theme itself

1. Clone this repo
2. Run `npm install`
3. Run `gulp watch` (and then leave that terminal window reserved for the gulp watcher to run)
4. If you encounter any errors, consider changing your version of node (nvm is a useful tool for this.) Version 8.10.0 is confirmed to work. 
5. Look at `index.html` (ideally with a [local development webserver](https://askubuntu.com/questions/377389/how-to-easily-start-a-webserver-in-any-folder))
6. Edit any of the `.scss` or `.js` files within the `src` directory as desired


### Publishing an update of the theme to NPM

1. Make any desired changes to the theme (see above instructions)
2. Update the version number in `package.json`
3. Commit changes to github
4. Run `npm publish`


### Editing the docs (which are powered by VuePress)

1. Run `npm run docs:dev`
2. If you encounter any errors, consider changing your version of node (nvm is a useful tool for this.) Version 8.10.0 is confirmed to work. 
3. Edit any of the `README.md` files within the `docs` directory as you see fit.


### Publishing updates to the docs

1. Run `bash deploy.sh`


## License
The project is open source and under the [GNU General Public License v3+](https://www.gnu.org/licenses/gpl.html). A copy can be found in the `COPYING` file.

