const mongoose = require('mongoose');

const URL = process.env.MONGODB_URL;

mongoose.set('strictQuery', false);
mongoose
	.connect(URL)
	.then(() => {
		console.log('mongoose connected');
	})
	.catch(() => {
		console.log('connection error');
	});

const personSchema = mongoose.Schema({
	name: String,
	phone: String,
});

personSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model('Person', personSchema);
