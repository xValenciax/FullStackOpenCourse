import { useState } from 'react';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-1234567' },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filterValue, setFilterValue] = useState('');

	const handleNewNames = (e) => {
		setNewName(e.target.value);
	};

	const handleNewNumbers = (e) => {
		setNewNumber(e.target.value);
	};
	const addPerson = (e) => {
		e.preventDefault();

		if (persons.find((person) => person.name === newName)) {
			window.alert(`${newName} is already added to phonebook`);
			return;
		}

		const newPerson = {
			name: newName,
			number: newNumber,
		};
		setPersons(persons.concat(newPerson));
		setNewName('');
		setNewNumber('');
	};

	const handleFiltering = (e) => {
		setFilterValue(e.target.value);
	};

	const finalList = filterValue
		? persons.filter((person) => person.name.startsWith(filterValue))
		: persons;

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				filter shown with{' '}
				<input value={filterValue} onChange={handleFiltering} />
			</div>
			<h2>Add contact</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={handleNewNames} />
					<br />
					number: <input value={newNumber} onChange={handleNewNumbers} />
				</div>
				<br />
				<div>
					<button type='submit'>add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{finalList.map((person) => (
				<b key={person.name}>
					<p>
						{person.name} {person.number}
					</p>
				</b>
			))}
		</div>
	);
};

export default App;
