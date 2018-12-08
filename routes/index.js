var express = require('express');
var router = express.Router();
var Assets = require("../models/Assets.js");

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Market' });
});

module.exports = router;
