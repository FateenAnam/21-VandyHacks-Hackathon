const express = require('express');
const router = express.Router();
const { DiningOption } = require('../models/DiningOptions');

//============================================
//      	API Calls - Dining Options
//============================================

router.post('/insertDining', (req, res) => {
	// Get name of the DiningOptions from Charlie
	let optionBody = {
		name : req.body.name
	}
	const diningOption = new DiningOption(optionBody);

	diningOption.save((err, doc) => {
		if(err) return res.json({ insertDiningSuccess : false });
	})
	return res.status(200).json({ insertDiningSuccess : true });
})

router.post('/getDining', (req, res) => {
	const name = req.body.diningOption;

	DiningOption.findOne({ name: name }, (err, DiningOption) => {
    if (err) return res.json({ getDiningSuccess: false }, err);
    if (!DiningOption) return res.json({
      getDiningSuccess: false,
      message: "Error : diningOptions.js(/getOne, cannot get diningOption)"
    });

    return res.status(200).json({
      name : DiningOption.name
    });
  })
})

router.get('/deleteDining', (req,res) => {
	DiningOption.deleteMany({}, (err, doc) => {
    if (err) return res.json({ removeDiningSuccess: false, err });
  });
	return res.status(200).json({ removeDiningSuccess: true });
})

module.exports = router;