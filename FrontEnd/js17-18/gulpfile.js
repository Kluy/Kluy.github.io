'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss');

gulp.task('concat', function() {
    gulp.src('js/src/*.js')
        .pipe(uglify())
        .pipe(concat('script.main.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('concat:css', function() {
    gulp.src('css/src/*.css')
        .pipe(uglifycss())
        .pipe(concat('style.main.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('default', [ 'concat', 'concat:css' ]);