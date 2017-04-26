//var models = require('../models');
var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');

router.get('/signin', function(req, res) {
    res.render('signin', { "hello": cool() });
});

module.exports = router;
