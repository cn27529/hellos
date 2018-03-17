var gulp = require('gulp');
var cssminify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var clean = require('gulp-clean');
var sass = require('gulp-sass');

var app = {
    src: 'app',
    css: 'app/css/*.css',
    js: 'app/scripts/**/*.js',
    dist: 'dist',
    scss: 'app/scss/**/*.scss'
}

var gulpConfig = {}

gulp.task('scss', function () {
    gulp.src(app.scss) // 指定要處理的 Scss 檔案目錄
        .pipe(sass()) // 編譯 Scss
        .pipe(gulp.dest(app.css)); // 指定編譯後的 css 檔案目錄
});

gulp.task('hello', function () {
    console.log('hello this is my first gulp task');
});

gulp.task('css', function () {
    var stream = gulp
        .src(app.css)
        .pipe(cssminify())
        .pipe(gulp.dest(app.dist + '/css'));
    return stream;
});

gulp.task('js', function (cb) {
    pump([
        gulp.src(app.js),
        uglify(),
        gulp.dest(app.dist + '/scripts')
    ], cb);
});

// gulp.task('clean-css', function () {
//     var clean_path = app.dist + '/css';
//     return gulp
//         .src(clean_path, {read: false})
//         .pipe(clean());
// });
// gulp.task('clean-scripts', function () {
//     var clean_path = app.dist + '/scripts';
//     return gulp
//         .src(clean_path, {read: false})
//         .pipe(clean());
// });

gulp.task('rebuild', [
    'css', 'js'
], function () {
    console.log('rebuilding....');
});

gulp.task('cleanall', function () {
    var js = app.dist + '/scripts';
    var css = app.dist + '/css';
    return gulp.src([
        js, css
    ], {read: false}).pipe(clean());
});
