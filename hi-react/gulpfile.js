var gulp = require('gulp')           // 載入 gulp
var gulpUglify = require('gulp-uglify')  // 載入 gulp-uglify
var gulpSass = require('gulp-sass')    // 載入 gulp-sass
var gulpCompass = require('gulp-compass')  // 載入壓縮css模組
var gulpImagemin = require('gulp-imagemin') // 載入壓縮圖片模組
var gulpPlumber = require('gulp-plumber') // 載入 gulp-plumber
var config = require('./config.json')
var gulpLivereload = require('gulp-livereload') //當 HTML, CSS 或 JavaScript 異動時，自動重新載入頁面
var gulpNotify = require("gulp-notify")  // 載入 gulp-notify 處理通知
var browserSync = require('browser-sync').create(); //瀏覽器同步檢視

// 建立預設 gulp task
// gulp.task('default', function () {
//     console.log('hi~hi~hi~~~');
//     console.log('Hello Gulp Default Task');
// });

//gulp.task('default', ['other', 'scripts', 'styles','image','watch']);
//gulp.task('default', ['other', 'scripts', 'styles','image'])


// gulp.task('default', function(){
//   console.log('讀取config.json設定檔');
//   console.log(config.desktop.dest);
// });



// // 定義名稱為 other 的 gulp 工作
// gulp.task('other', function () {
//     console.log('執行Gulp的other任務')
// });


// Static server
gulp.task('browser', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

// 定義名稱為 scripts 的 gulp 工作
gulp.task('scripts', function () {
    console.log('指定要處理的原始 JavaScript 檔案目錄')
    console.log('將 JavaScript 檔案做最小化')
    console.log('指定最小化後的 JavaScript 檔案目錄')
    gulp.src('js/*.js')        // 指定要處理的原始 JavaScript 檔案目錄
        //.pipe(gulpPlumber())                    // 使用 gulp-plumber 處理例外
        .pipe(gulpUglify())                     // 將 JavaScript 做最小化
        .pipe(gulp.dest('js/minify'))  // 指定最小化後的 JavaScript 檔案目錄
        .pipe(gulpNotify("Minify JavaScript Finish"))  // 處理結束通知訊息
});

gulp.task('styles', function () {
  console.log('指定要處理的 Scss 檔案目錄')
  console.log('編譯 Scss')
  console.log('指定編譯後的 css 檔案目錄')
  console.log('outputStyle: "compressed" 壓縮 css 檔案')
    gulp.src('scss/*.scss')    // 指定要處理的 Scss 檔案目錄
        .pipe(gulpPlumber())                    // 使用 gulp-plumber 處理例外
        .pipe(gulpSass()) // 編譯 Scss
        // .pipe(gulpSass({
        //     outputStyle: 'compressed' //壓縮 css 檔案
        // }))
        .pipe(gulp.dest('css'))  // 指定編譯後的 css 檔案目錄
});

//使用 gulp-imagemin 壓縮圖片
gulp.task('image', function(){
  console.log('gulpImagemin 執行壓縮圖片')
  gulp.src('images/test/**')
      .pipe(gulpPlumber())                    // 使用 gulp-plumber 處理例外
      .pipe(gulpImagemin())
      .pipe(gulp.dest('images'))

});
