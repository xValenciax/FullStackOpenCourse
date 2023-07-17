const express = require('express');
const app = express();

app.use(express.json());

let persons = [
	{
		id: 1,
		name: 'Arto Hellas',
		number: '040-123456',
	},
	{
		id: 2,
		name: 'Ada Lovelace',
		number: '39-44-5323523',
	},
	{
		id: 3,
		name: 'Dan Abramov',
		number: '12-43-234345',
	},
	{
		id: 4,
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
	},
];

app.get('/api/persons', (req, res) => {
	res.status(200).send(persons);
});

app.get('/info', (req, res) => {
	const TimeNow = new Date().toTimeString();
	const DateNow = new Date().toDateString();
	res.status(200).send(
		`<div>
			<p>Phonebook has info for ${persons.length} people</p>
			<p>${DateNow} ${TimeNow}</p>
		</div>`
	);
});

app.get('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id);
	const person = persons.find((person) => person.id === id);

	if (person) return res.status(200).send(person);

	res.status(404).send('Invalid Id Provided').end();
});

app.delete('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id);
	persons = persons.filter((note) => note.id !== id);

	res.status(204).end();
});

app.post('/api/persons', (req, res) => {
	const data = req.body;
	const id = Math.floor(Math.random() * 100 + 1);
	const name = data.name;
	const number = data.number;

	if (!name | !number)
		return res.status(400).json({ error: 'Required Fields Are Missing' });

	if (persons.find((person) => person.name === name))
		return res.status(409).json({ error: 'Name Must Be Unique' });

	const newPerson = {
		id,
		name,
		number,
	};

	persons = persons.concat(newPerson);

	res.status(201).send(persons);
});

const PORT = 3001;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
