const express = require('express');
const Track = require('../models/Track');
const Album = require('../models/Album');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const criteria = {};

		if (req.query.album) {
			criteria.album = req.query.album;
		}

		const tracks = await Track.find(criteria).populate('album', 'title artist');
		res.send(tracks);
	} catch (e) {
		res.sendStatus(500);
	}
});

router.post('/', async (req, res) => {
	try {
		const trackData = req.body;
		const track = new Track(trackData);

		await track.save();
		res.send(track);
	} catch (e) {
		res.status(400).send(e);
	}
});

module.exports = router;