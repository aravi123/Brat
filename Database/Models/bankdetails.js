var mongoose = require('mongoose');

var bankdetailsSchema = new mongoose.Schema({

	id:{
		type:mongoose.Schema.ObjectId
	},
	accountno:{
		type:String,
		default:""
	},
	bankname:{
		type:String,
		default:""
	},
	ifsccode:{
		type:String,
		default:""
	},
	debitcardno:{
		type:String,
		default:""
	},
	debitcardcvv:{
		type:String,
		default:""
	},
	debitcardexpiryyear:{
		type:String,
		default:""
	},
	debitcardexpirymonth:{
		type:String,
		default:""
	},
	cardholdername:{
		type:String,
		default:""
	}
});
var bankdetails =  mongoose.model("bankdetails",bankdetailsSchema);
module.exports = bankdetails;
module.exports.bankdetailsSchema = bankdetailsSchema; 
