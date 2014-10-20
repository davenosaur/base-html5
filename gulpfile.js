var gulp = require('gulp'),
 sass = require('gulp-sass'),
  connect = require('gulp-connect');


gulp.task('connect', function() {
  connect.server();
});



gulp.task('default', ['sass', 'connect']);