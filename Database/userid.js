var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var app = express();

var userData = require('./Models/userData.js');

router.get('/userId',function (req,res) {
	//console.log("obj");
	console.log(req.session.name);
	//res.send(sess);
	if (sess) {
		userData.findOne({
			_id:req.session.name,
		},
		function(err,sucess){
			if (err) {
				res.status(404).send("Not found");
			}
			else{
				res.status(200).send(sucess);
			}
		}
		);
	}
});

module.exports = router;		