const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
	title: String,
	author: String,
	url: String,
	likes: Number,
});

blogSchema.set('toJSON', {
	transform: (doc, returnedObj) => {
		returnedObj.id = returnedObj._id.toString();
		delete returnedObj._id;
		delete returnedObj._v;
	},
});

module.exports = mongoose.model('Blog', blogSchema);
