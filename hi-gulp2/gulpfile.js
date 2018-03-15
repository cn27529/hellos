var gulp = require('gulp');
var cssminify = require('gulp-minify-css');
//var uglify = require('gulp-uglify');
//var pump = require('pump');

var app = {
    src: 'app',
    css: 'app/css/*.css',
    js: 'app/scripts/*.js',
    build: 'build',
    dist: 'dist'
}

gulp.task('hello-world', function () {
    console.log('my first gulp task');
});

gulp.task('css', function () {
    var stream = gulp.src(app.css)
    //.pipe(jsminify())
        .pipe(gulp.dest(app.dist + '/css'));
    return stream;
});

// gulp.task('js', function (cb) {
//     pump([
//         gulp.src(app.js),
//         uglify(),
//         gulp.dest(app.dist+'/script')
//     ], cb);
// });
