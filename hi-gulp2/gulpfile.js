var gulp = require('gulp');
var cssminify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var clean = require('gulp-clean');

var app = {
    src: 'app',
    css: 'app/css/*.css',
    js: 'app/scripts/*.js',
    dist: 'dist'
}

gulp.task('hello', function () {
    console.log('hello this is my first gulp task');
});

gulp.task('css', function () {
    var stream = gulp.src(app.css)
        .pipe(cssminify())
        .pipe(gulp.dest(app.dist + '/css'));
    return stream;
});

gulp.task('js', function (cb) {
    pump([
            gulp.src(app.js),
            uglify(),
            gulp.dest(app.dist + '/scripts')
        ],
        cb
    );
});


// gulp.task('clean-css', function () {
//     var clean_path = app.dist + '/css';
//     return gulp.src(clean_path, {
//             read: false
//         })
//         .pipe(clean());
// });

// gulp.task('clean-scripts', function () {
//     var clean_path = app.dist + '/scripts';
//     return gulp.src(clean_path, {
//             read: false
//         })
//         .pipe(clean());
// });

// gulp.task('rebuild', ['css', 'js'], function () {
//     console.log('rebuilding....');
// });

// gulp.task('cleanall', function () {
//     var clean_js = app.dist + '/scripts';
//     var clean_css = app.dist + '/css';
//     return gulp.src([clean_js, clean_css], {
//             read: false
//         })
//         .pipe(clean());
// });
