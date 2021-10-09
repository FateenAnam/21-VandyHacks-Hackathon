const mongoose = require('mongoose');

const diningSchema = mongoose.Schema({
	name : {
		type : String
	}
});

const DiningOption = mongoose.model('DiningOptions', diningSchema);
module.exports = { DiningOption };