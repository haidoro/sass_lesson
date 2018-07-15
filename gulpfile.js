'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {

  browserSync.init({
      server: "./"
  });
});


gulp.task('sass', function(){
  gulp.src('./_src/sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function(){
  gulp.watch('./_src/sass/**/*.scss', ['sass']);
})

gulp.task('default',['serve','watch']);
