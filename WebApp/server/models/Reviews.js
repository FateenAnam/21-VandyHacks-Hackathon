const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
	location : {
		type : String
	},
	rating : {
		type : Number
	},
	comment : {
		type : String
	}
})

const Review = mongoose.model('review', reviewSchema);
module.exports = { Review };