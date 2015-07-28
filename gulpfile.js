var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , nib = require('nib')
  , rupture = require('rupture')
  , jade = require('gulp-jade')

gulp.task('stylus', function () {
  return gulp.src('src/styl/index.styl')
    .pipe(stylus({ use: [nib(), rupture()] }))
    .pipe(gulp.dest('dest/css'))
})

gulp.task('jade', function () {
  return gulp.src('src/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('dest'))
})

gulp.task('watch', function () {
  gulp.watch('src/styl/index.styl', ['stylus'])
  gulp.watch('src/index.jade', ['jade'])
})

gulp.task('default', ['watch', 'stylus', 'jade'])
