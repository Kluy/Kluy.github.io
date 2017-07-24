/**
 * Created by TERM2 on 19.05.2017.
 */

// var gulp = require('gulp');
// var sass = require('gulp-sass');
//
// gulp.task('sass', function () {
//     return gulp.src('css/src/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('css'));
// });
//
// // gulp.task('sass:watch', function () {
// //     gulp.watch('./sass/**/*.scss', ['sass']);
// // });
//
// gulp.task('default', [ 'sass' ]);

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss');

gulp.task('concat:main', function() {
    gulp.src('js/src/*.js')
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('concat', function() {
    gulp.src('js/vendor/*.js')
        .pipe(uglify())
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('concat:css', function() {
    gulp.src('css/src/*.css')
        .pipe(uglifycss())
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('default', [ 'concat', 'concat:css', 'concat:main' ]);