var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('deploy-gh-pages', function() {
  return gulp.src([
    './src/**/*',
    './styles/*.*',
    './images/*.*',
    './vendor/bluebird.min.js',
    './jspm_packages/*.js', // include system.js
    './jspm_packages/github/PrismJS/prism*/themes/*.css',
    './jspm_packages/github/google/code-prettify*/loader/**/*',
    './jspm_packages/npm/babel-runtime*/**/*',
    './index.html',
    './favicon.ico',
    './config.js',
    './jspm_packages/github/Dogfalo/materialize*/font/**/*'
  ], { base: '.' })
    // .pipe(gulp.dest('./dist')) // for debugging
    .pipe(ghPages());
});


gulp.task('deploy', function() {
  return runSequence(
    'clean',
    'unbundle',
    'bundle',
    'deploy-gh-pages',
    'unbundle',
    'clean'
  );
});
