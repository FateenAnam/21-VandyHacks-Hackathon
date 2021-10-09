const express = require('express');
const router = express.Router();
const { DiningOption } = require('../models/DiningOptions');

const locationJSON = require('../../../DiningLocations.json');
const locations = JSON.parse(locationJSON);
console.log(locations);

//============================================
//      	API Calls - Dining Options
//============================================

router.post('/insertDining', (req, res) => {
	const locations = JSON.parse(locationJSON);

	let optionBody = {
		name : req.body.name
	}
	const diningOption = new DiningOption(optionBody);

	diningOption.save((err, doc) => {
		if(err) return res.json({ insertDiningSuccess : false });
	})
	return res.status(200).json({ insertDiningSuccess : true });
})

router.post('/getOneDining', (req, res) => {
	const name = req.body.diningOption;

	DiningOption.findOne({ name: name }, (err, DiningOption) => {
    if (err) return res.json({ getOneDiningSuccess: false }, err);
    if (!DiningOption) return res.json({
      getOneDiningSuccess: false,
      message: "Error : diningOptions.js(/getOne, cannot get diningOption)"
    });

    return res.status(200).json({
			getOneDiningSuccess : true,
      name : DiningOption.name
    });
  })
})

router.get('/getAllDining', (req, res) => {
	DiningOption.find({}, (err, docs) => {
		if(err) return res.json({ getAllDiningSuccess : false, err });
		return res.status(200).json(docs);
	})
})

router.get('/deleteDining', (req,res) => {
	DiningOption.deleteMany({}, (err, doc) => {
    if (err) return res.json({ removeDiningSuccess: false, err });
  });
	return res.status(200).json({ removeDiningSuccess: true });
})

module.exports = router;