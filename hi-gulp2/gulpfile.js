var gulp = require('gulp');
var cssminify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

var app = {
    src: 'app',
    css: 'app/css/*.css',
    js: 'app/scripts/**/*.js',
    dist: 'dist',
    scss: 'app/scss/**/*.scss',
    html: 'app/*.html'
}

var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
    gulp
        .src('dist')
        .pipe(webserver({
            livereload: true,
            directoryListing: {
                enable: true,
                path: 'dist'
            },
            open: true,
            port: 8080
        }));
});

gulp.task('html', function () {
    gulp
        .src(app.html)
        .pipe(gulp.dest(app.dist))
    //.pipe(connect.reload());
});

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

// gulp.task('clean-css', function () {     var clean_path = app.dist + '/css';
//  return gulp         .src(clean_path, {read: false}) .pipe(clean()); });
// gulp.task('clean-scripts', function () {     var clean_path = app.dist +
// '/scripts';     return gulp         .src(clean_path, {read: false})
// .pipe(clean()); });

gulp.task('build', [
    'css', 'js', 'html'
], function () {
    console.log('building....');
});

gulp.task('cleanall', function () {
    var js = app.dist + '/scripts';
    var css = app.dist + '/css';
    var html = app.dist + '/*.html';
    return gulp.src([
        js, css, html
    ], {read: true}).pipe(clean());
});
