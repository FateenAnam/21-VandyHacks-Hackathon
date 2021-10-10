const express = require('express');
const router = express.Router();
const { DiningOption } = require('../models/DiningOptions');

const locationJSON = require('../../../DiningLocations.json');

//============================================
//      	API Calls - Dining Options
//============================================

router.get('/insertDining', (req, res) => {
	const options = JSON.parse(locationJSON);

	options.forEach(option => {
		let body;

		if (option.location === 'e-bronson-ingram-dining-hall') {
			body = {
				name: "EBI",
				meal: option.meal,
				menu: option.menu
			}
		} else if (option.location === 'kissam-dining') {
			body = {
				name: "Kissam",
				meal: option.meal,
				menu: option.menu
			}
		} else if (option.location === 'rand') {
			body = {
				name: "Rand",
				meal: option.meal,
				menu: option.menu
			}
		} else if (option.location === 'zeppos') {
			body = {
				name: "Zeppos",
				meal: option.meal,
				menu: option.menu
			}
		} else if (option.location === 'commons-dining') {
			body = {
				name: "Commons",
				meal: option.meal,
				menu: option.menu
			}
		} else {
			body = {
				name: "2301",
				meal: option.meal,
				menu: option.menu
			}
		}
		const diningOption = new DiningOption(body);

		diningOption.save((err, doc) => {
			if (err) return res.json({ insertDiningSuccess: false });
		})
	})

	return res.status(200).json({ insertDiningSuccess: true });
})

router.post('/getOneDining', (req, res) => {
	const name = req.body.diningOption;
	const getMeal = () => {
		var today = new Date();
		var time = today.getHours();

		if(time > 7 && time < 10) return 'breakfast';
		else if(time > 11 && time < 15) return 'lunch';
		else if(time > 16 && 20) return 'dinner';
		else return 'breakfast'
	}
	var mealChoice = getMeal();

	DiningOption.findOne({ name: name, meal : mealChoice }, (err, DiningOption) => {
		if (err) return res.json({ getOneDiningSuccess: false }, err);
		if (!DiningOption) return res.json({
			getOneDiningSuccess: false,
			message: "Error : diningOptions.js(/getOne, cannot get diningOption)"
		});

		return res.status(200).json({
			getOneDiningSuccess: true,
			name: DiningOption.name,
			menu: DiningOption.menu
		});
	})
})

router.get('/getAllDining', (req, res) => {
	DiningOption.find({}, (err, docs) => {
		if (err) return res.json({ getAllDiningSuccess: false, err });
		return res.status(200).json(docs);
	})
})

router.get('/deleteDining', (req, res) => {
	DiningOption.deleteMany({}, (err, doc) => {
		if (err) return res.json({ removeDiningSuccess: false, err });
	});
	return res.status(200).json({ removeDiningSuccess: true });
})

module.exports = router;