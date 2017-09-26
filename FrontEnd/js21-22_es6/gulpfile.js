/**
 * Created by TERM2 on 07.09.2017.
 */

const gulp = require('gulp'),
      babel = require('gulp-babel');

gulp.task('default', () =>
    gulp.src('js/src/script.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('js/build/'))
);