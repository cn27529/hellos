// var gulp = require('gulp'),
//   connect = require('gulp-connect');
//
// gulp.task('connect', function() {
//   connect.server({
//     root: 'app',
//     port: 3000,
//     livereload: true
//   });
// });
//
// gulp.task('html', function () {
//   gulp.src('./app/index.html')
//     .pipe(connect.reload());
// });
//
// gulp.task('watch', function () {
//   gulp.watch(['./app/*.html'], ['html']);
// });
//
// gulp.task('default', ['connect', 'watch']);

var gulp = require('gulp');
var webserver = require('gulp-webserver');
//var livereload = require('gulp-livereload');

gulp.task('webserver',['watch'], function() {

  console.log('webserver task');
  gulp.src('./app/')
    .pipe(webserver({
      livereload: true,
      //directoryListing: true,
      directoryListing: {
        enable: false,
        path: './app',
        options: undefined,
      },
      open: true,
      //fallback: 'profile.html',
      port: 8000,
      //path: 'app',
    }))


});

gulp.task('watch', function () {

  console.log('watch task');

  // livereload.listen();
  // gulp.watch('./app/*.html', ['html']);

  gulp.watch(['./app/*.html'], function(file){
    console.log('監控的檔案已變更:'+file.path);
  });

});

// gulp.task('html', function () {
//     gulp.src('./app/*.html')  //指定要處理的原始檔案目錄
//         .pipe(livereload());  //當檔案異動後自動重新載入頁面
// });

//gulp.task('default', ['watch', 'webserver']);

gulp.task('runweb', ['webserver'], function(){
  console.log('runweb task');

  // return gulp.src('./app/*.html')
  //     .pipe(gulp.dest('./dist'));

});
