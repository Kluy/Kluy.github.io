/**
 * Created by TERM2 on 22.09.2017.
 */


const gulp = require("gulp");
const sass = require("gulp-sass");
const watchSass = require("gulp-watch-sass");


gulp.task('sass:watch', function() {
    watchSass('src/css/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});

gulp.task('default', ['sass:watch']);
