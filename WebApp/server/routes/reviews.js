const express = require('express');
const router = express.Router();
const { Review } = require('../models/Reviews')

//============================================
//      	API Calls - Reviews
//============================================

router.post('/insertReview', (req, res) => {
	let reviewBody = {
		location : req.body.location,
		rating : req.body.rating,
		comment : req.body.comment
	}
	const review = new Review(reviewBody);

	review.save((err, doc) => {
		if (err) return res.json({ insertReviewSuccess: false, err });
	})
	return res.status(200).json( { insertReviewSuccess : true });
})

router.post('/getReview', (req, res) => {
	const location = req.body.location;

	Review.find({location : location}, (err, docs) => {
		if(err) return res.json({ getReviewSuccess : false, err });
		return res.status(200).json(docs);
	})
})

router.get('/removeReview', (req, res) => {
	Review.deleteMany({}, (err, doc) => {
    if (err) return res.json({ removeReviewSuccess: false, err });
  });
	return res.status(200).json({ removeReviewSuccess: true });
})

module.exports = router;