var express = require('express');
var cool = require('cool-ascii-faces');
var favicon = require('serve-favicon'); //--------add on 161124
var app = express();
var bodyparser = require('body-parser');
var path = require('path');

app.use(bodyparser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 20
}));
app.use(bodyparser.json({ limit: 1024 * 1024 * 20 }));

//http://stackoverflow.com/questions/24433733/learning-node-express-public-folder-not-working
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/favicon.ico'));

//app.set('views', path.join(__dirname, 'views'));//設計頁面模板位置，在views子目錄下
//app.set('view engine', 'ejs');//表明要使用的模板引擎(樣板引擎，Template Engine)是ejs
app.set('views', './views'); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

//URL位置
var index = require('./routes/index');
//var users  = require('./routes/users');
var account = require('./routes/account');
var profile = require('./routes/profile');
var note = require('./routes/note');
var photo = require('./routes/photo'); 

var mail = require('./routes/mail'); 
var member = require('./routes/member');
var calendar = require('./routes/calendar'); 
var file = require('./routes/file');

var users = require('./routes/users');
var home = require('./routes/home');
var hello = require('./routes/hello');
var about = require('./routes/about');
var sitemap = require('./routes/sitemap');
var video = require('./routes/video');
var random = require('./routes/random');
var onepage = require('./routes/onepage');
var crud = require('./routes/crud');
var checkbox = require('./routes/checkbox');

//app.use('/', index);
//app.use('/index', index);
app.use('/account', account);
app.use('/profile', profile);
app.use('/note', note);
app.use('/photo', photo);
app.use('/mail', mail);
app.use('/member', member);
app.use('/calendar', calendar);
app.use('/file', file);

app.use('/hello', hello);

//app.use('/', home);
app.use('/', onepage);
app.use('/index', home);
app.use('/home', home);
app.use('/users', users);
app.use('/hello', hello);
app.use('/about', about);
app.use('/sitemap', sitemap);
app.use('/video', video);
app.use('/random', random);
app.use('/onepage', onepage);
app.use('/crud', crud);
app.use('/checkbox', checkbox);


// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
    
    res.status(404);
    //next(err);
    //res.render('error', {err: err});
    console.log(err);
    res.end();

});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {

    res.status(err.status || 500);
    res.json({
        msg: err.message,
        err: (app.get('env') === 'development') ? err : {}
    });

});

module.exports = app;
