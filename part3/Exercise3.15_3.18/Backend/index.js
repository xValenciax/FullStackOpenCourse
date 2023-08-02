require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const Person = require('./models/Person');
const app = express();

let data = false;

morgan.token('data', (req) => {
	if (req.body && req.method === 'POST') {
		return JSON.stringify(req.body);
	} else return null;
});

app.use(express.json());
app.use(
	morgan(function (tokens, req, res) {
		return [
			tokens.method(req, res),
			tokens.url(req, res),
			tokens.status(req, res),
			tokens.res(req, res, 'content-length'),
			'-',
			tokens['response-time'](req, res),
			'ms',
			req.body && req.method === 'POST' ? tokens.data(req) : '',
		].join(' ');
	})
);

app.use(express.static('dist'));

app.get('/api/persons', (req, res) => {
	Person.find({}).then((persons) => {
		res.status(200).json(persons);
	});
});

app.get('/info', (req, res) => {
	const TimeNow = new Date().toTimeString();
	const DateNow = new Date().toDateString();

	Person.find({}).then((persons) => {
		res.status(200).send(
			`<div>
		<p>Phonebook has info for ${persons.length} people</p>
				<p>${DateNow} ${TimeNow}</p>
			</div>`
		);
	});
});

app.get('/api/persons/:id', (req, res, next) => {
	Person.findById(req.params.id)
		.then((person) => {
			res.status(200).json(person);
		})
		.catch((err) => next(err));
});

app.delete('/api/persons/:id', (req, res) => {
	Person.findByIdAndRemove(req.params.id)
		.then((result) => {
			res.status(204).end();
		})
		.catch((err) => next(err));
});

app.post('/api/persons', (req, res) => {
	const data = req.body;
	const name = data.name;
	const phone = data.phone;

	if (!name | !phone)
		return res.status(400).json({ error: 'Required Fields Are Missing' });

	const person = new Person({
		name,
		phone,
	});

	person.save().then((savedPerson) => {
		res.status(201).json(savedPerson);
	});
});

app.put('/api/persons/:id', (req, res, next) => {
	const body = req.body;
	const person = {
		name: body.name,
		phone: body.phone,
	};
	Person.findByIdAndUpdate(req.params.id, person, { new: true })
		.then((returnedPerson) => {
			res.status(200).json(returnedPerson);
		})
		.catch((err) => next(err));
});

const errorHandler = (error, req, res, next) => {
	console.log(error.message);

	if (error.name === 'CastError')
		return res.status(400).send({ error: 'malformed id' });

	next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
