const mongoose = require('mongoose');

if (process.argv.length < 3) {
	console.log('please make sure to provide a password');
	process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://selim:${password}@cluster0.kchvmld.mongodb.net/PhoneBook?
retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose.connect(url);

const personSchema = mongoose.Schema({
	name: String,
	phone: String,
});

const Person = mongoose.model('Person', personSchema);

if (process.argv.length > 3) {
	const name = process.argv[3];
	const phone = process.argv[4];

	const person = new Person({
		name,
		phone,
	});

	person.save().then((res) => {
		console.log(`added ${name} number ${phone} to PhoneBook`);
		mongoose.connection.close();
	});
} else {
	Person.find({}).then((result) => {
		result.forEach((p) => {
			console.log(p);
		});
		mongoose.connection.close();
	});
}
