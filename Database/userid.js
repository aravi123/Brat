var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var app = express();

var userData = require('./Models/userData.js');

router.get('/userId',function (req,res) {
	//console.log("obj");
	console.log(sess);
	res.send(sess);
});

module.exports = router;