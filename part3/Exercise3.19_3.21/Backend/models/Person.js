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
	name: {
		type: String,
		minLength: 3,
		required: [true, 'User name is required'],
	},
	phone: {
		type: String,
		minLength: 8,
		validate: {
			validator: function (v) {
				return /^\d{2,3}-\d+$/.test(v);
			},
			message: (props) => `${props.value} is not a valid phone number!`,
		},
		required: [true, 'User phone number is required'],
	},
});

personSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model('Person', personSchema);
