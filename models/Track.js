const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TrackSchema = new Schema({
	title: {
	    type: String,
		required: true
	},
	album: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Album',
		required: true
	},
	duration: {
		type: String,
		required: true
	}
});

const Track = mongoose.model('Track', TrackSchema);

module.exports = Track;
