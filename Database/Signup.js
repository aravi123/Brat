var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');

var userData = require('./Models/userData.js');
router.post('/signup',function (req,res) {
	var newUser = new userData(req.body);
	console.log(newUser);
	newUser.save(function(err,docs){
		if (err) {
			console.log("error in creating user");
			res.status(400).send("Error in creating user");
		}
		else{
			console.log("Sucessfuly created user");
			res.status(200).send("Sucessfuly created user");
		}
	});
});

module.exports = router;
