var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var source = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
        .pipe(source.init())
        .pipe(sass({outputStyle: 'compact'}, {errLogToConsole: true}, {sourceMap: true}))
        .on('error',function(e){
            console.error('gulpError', e)
        })
        .pipe(source.write())
        .pipe(gulp.dest('css'))
});

gulp.task('jshint', function () {
    return gulp.src('app.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

gulp.task('watch', function () {
    gulp.watch('**/*.scss', ['sass']);
});