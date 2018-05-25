const gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    nodemon = require('gulp-nodemon');
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;



const jsSrc = './*/app.js',
    jsDest = './',
    htmlSrc = 'index.html',
    current = 'let_const';

gulp.task('nodemon', () => {
    var stream = nodemon({
        script: `${current}/app.js`,
    });
    stream.on('start', reload);
});
gulp.task('babel', () =>
    gulp.src(jsSrc)
        .pipe(babel())
        .pipe(rename({suffix: '.babeled'}))
        .pipe(gulp.dest(jsDest))
        .pipe(browserSync.stream())
);

gulp.task('default',['babel'], () => {
    browserSync.init({
        server: {
            index: 'index.html',
        }
    });



    gulp.watch(jsSrc, ['babel']);
    gulp.watch(htmlSrc, reload);
});
