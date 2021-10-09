const express = require('express');
const router = express.Router();
const { DiningOption } = require('../models/DiningOptions');

router.post('/api/DiningOptions/addOption', (req, res) => {
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

router.post('/api/DiningOptions/getOne', (req, res) => {
	const name = req.body.diningOption;

	DiningOption.findOne({ name: name }, (err, DiningOption) => {
    if (err) return res.json({ getDiningSuccess: false }, err);
    if (!DiningOption) return res.json({
      getDiningSuccess: false,
      message: "Error : diningOptions.js(/getSong, cannot get song)"
    });

    return res.status(200).json({
      rank: song.rank,
      songTitle: song.songTitle,
      artistName: song.artistName,
      albumCover: song.albumCover
    });
  })
})

router.get('/api/DiningOptions/delete', (req,res) => {
	DiningOption.deleteMany({}, (err, doc) => {
    if (err) return res.json({ removeDiningSuccess: false, err });
    return res.status(200).json({ removeDiningSuccess: true });
  });
})

module.exports = router;