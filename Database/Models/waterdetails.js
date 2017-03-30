var mongoose = require('mongoose');

var waterScehema = new mongoose.Schema({
	id:{
		type:mongoose.Schema.ObjectId
	},
	username:{
		type:String,
		default:""
	},
	password:{
		type:String,
		default:""
	}

});
var water = mongoose.model('water',waterScehema);
module.exports = water;
module.exports.waterScehema = waterScehema;