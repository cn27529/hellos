var gulp = require('gulp');
var cssminify = require('gulp-minify-css');

var app = {
    src: 'app',
    css: 'app/css/*.css',
    js: 'app/scripts/*.js',
    build: 'build',
    dist: 'target'
}

gulp.task('hello_world',function(){
        console.log('my first gulp task');
});
 
gulp.task('somename', function() {
    var stream = gulp.src(app.css)
        .pipe(cssminify())
        .pipe(gulp.dest('build'));
    return stream;
});