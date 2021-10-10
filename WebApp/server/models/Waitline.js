const mongoose = require('mongoose');

const waitlineSchema = mongoose.Schema({
	location : {
		type : String
	},
	linenum : {
		type : Number
	}
})

const Waitline = mongoose.model('waitline', waitlineSchema);
module.exports = { Waitline };