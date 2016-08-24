var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

/*Path Files*/
var paths = {
    htmlTemplates: 'src/**/*.html',
    appTypescript: ['www/**/*.ts', '!typings/**/*.*'],
    appJs: ['www/**/*.js', 'www/**/*.js.map'],
    appSass: ['www/**/**/*.scss'],
    inputSass: 'www/app/app.scss',
    outputSass: 'www/app',
    sassdocOptions: {dest: './www/css/doc'}
};

/**
 * SASS to CSS - based on http://www.sitepoint.com/simple-gulpy-workflow-sass/
 * @desc This task take app.scss and transform this to .css, after that put each new .css into App_Web -> dist -> styles
 */

var sassOptions = {
    errLogToConsole: true
};

gulp.task('sass', function() {
  gulp
    .src(paths.inputSass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.outputSass))
});
