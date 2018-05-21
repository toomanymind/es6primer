const gulp = require('gulp'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel');

gulp.task('babel', () =>
    gulp.src('app.js')
        .pipe(babel())
        .pipe(rename({suffix: '.babeled'}))
        .pipe(gulp.dest('./'))
);

gulp.task('default',['babel'], () => {

    gulp.watch('app.js', ['babel']);
});
