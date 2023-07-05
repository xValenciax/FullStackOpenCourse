import { useState } from 'react';
import PersonList from './Components/PersonList';
import AddContactForm from './Components/AddContactForm';
import SearchPersons from './Components/SearchPersons';

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
		? persons.filter((person) =>
				person.name.toLowerCase().startsWith(filterValue.toLowerCase())
		  )
		: persons;

	return (
		<div>
			<h2>Phonebook</h2>
			<SearchPersons
				filterValue={filterValue}
				handleFiltering={handleFiltering}
			/>
			<h2>Add contact</h2>
			<AddContactForm
				submitHandler={addPerson}
				newName={newName}
				newNumber={newNumber}
				newNameHandler={handleNewNames}
				newNumberHandler={handleNewNumbers}
			/>

			<h2>Numbers</h2>
			<PersonList persons={finalList} />
		</div>
	);
};

export default App;
