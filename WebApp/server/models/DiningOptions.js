const mongoose = require('mongoose');

const diningSchema = mongoose.Schema({
	name : {
		type : String
	},
	meal : {
		type : String
	},
	menu : {
		type : Array
	}
});

const DiningOption = mongoose.model('diningoptions', diningSchema);
module.exports = { DiningOption };