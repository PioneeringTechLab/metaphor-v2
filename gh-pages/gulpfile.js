var gulp  = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  postcss      = require('gulp-postcss'),
  uglify = require("gulp-uglify");
  autoprefixer = require('autoprefixer');

gulp.task('build-theme', function() {
  return gulp.src(['src/scss/*.scss','src/scss/*/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer({ browsers: [
      'Chrome >= 35',
      'Firefox >= 38',
      'Edge >= 12',
      'Explorer >= 10',
      'iOS >= 8',
      'Safari >= 8',
      'Android 2.3',
      'Android >= 4',
      'Opera >= 12']})]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/'))
    .pipe(cleanCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('minify-js', function () {
  gulp.src(['src/js/*.js','src/js/*/*.js']) // path to your files
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'));
});

gulp.task('watch', ['build-theme','minify-js'], function() {
  gulp.watch(['src/scss/*.scss','src/scss/*/*.scss','src/js/*.js','src/js/*/*.js'], ['build-theme','minify-js']);
});

gulp.task('default', ['build-theme','minify-js'], function() {
});



