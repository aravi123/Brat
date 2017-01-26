var express =  require('express');
var router = express.Router();
var app  = express();
var mongoose = require('mongoose');

var userData = require('./Models/userData.js');

router.post('/login',function (req,res) {

	console.log(req.body);
	console.log("obj");
	userData.findOne({
		email:req.body.email
	},function(err,sucess){
		if (err) {
			res.status(404).send("No registerd email address found");
		}

		else{
			console.log(sucess);
			res.status(200).send(sucess);
			req.session.id = sucess.id;
		}
	}
	)	
	
});

module.exports =router;