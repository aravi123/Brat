var express =  require('express');
var router = express.Router();
var app  = express();
var mongoose = require('mongoose');
var session = require('express-session');
var userData = require('./Models/userData.js');

router.post('/login',function (req,res) {

	//console.log(req.body);
	//console.log("obj");
	userData.findOne({
		email:req.body.email
	},function(err,sucess){
		if (err) {
			res.status(404).send("No registerd email address found");
		}

		else{
			console.log(sucess.fname);
			res.status(200).send(sucess);
			//req.session.id = sucess.objectId;
			session = req.session;
			session.key  = sucess.fname;
			
			req.session.name  = sucess._id;
			sess = req.session.name;
			//console.log(req.session);

			//console.log();
		}
	}
	)	
	
});
router.get('/userId',function (req,res) {
	//console.log("obj");
	//	console.log(req.session.name);
});
module.exports =router;