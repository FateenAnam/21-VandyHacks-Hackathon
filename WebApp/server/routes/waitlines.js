const express = require('express');
const router = express.Router();
const { Waitline } = require('../models/Waitline');

//============================================
//      	API Calls - Waitlines
//============================================

router.post('/insertWaitline', (req, res) => {
	let waitlineBody = {
		location : req.body.location,
		linenum : 0
	}
	const waitline = new Waitline(waitlineBody);

	waitline.save((err, doc) => {
		if (err) return res.json({ insertWaitlineSuccess: false, err });
	})
	return res.status(200).json( { insertWaitlineSuccess : true });
})

router.post('/getWaitline', (req, res) => {
	const location = req.body.location;

	Waitline.find({location : location}, (err, waitline) => {
		if(err) return res.json({ getWaitlineSuccess : false, err });
		return res.status(200).json({
			linenum : waitline[0].linenum
		});
	})
})

router.get('/removeWaitline', (req, res) => {
	Waitline.deleteMany({}, (err, doc) => {
    if (err) return res.json({ removeWaitlineSuccess: false, err });
  });
	return res.status(200).json({ removeWaitlineSuccess: true });
})

module.exports = router;