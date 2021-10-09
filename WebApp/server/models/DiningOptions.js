const mongoose = require('mongoose');

const diningSchema = mongoose.Schema({
	name : {
		type : String
	}
});

const DiningOption = mongoose.model('diningoptions', diningSchema);
module.exports = { DiningOption };