import { useState, useEffect } from 'react';
import PersonList from './Components/PersonList';
import AddContactForm from './Components/AddContactForm';
import SearchPersons from './Components/SearchPersons';
import personService from './services/persons';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filterValue, setFilterValue] = useState('');

	useEffect(() => {
		personService.getAll().then((initialContacts) => {
			setPersons(initialContacts);
			console.log(
				'Promise fulfilled with the following data: ',
				initialContacts
			);
		});
	}, []);

	const handleNewNames = (e) => {
		setNewName(e.target.value);
	};

	const handleNewNumbers = (e) => {
		setNewNumber(e.target.value);
	};
	const addPerson = (e) => {
		e.preventDefault();

		if (persons.find((person) => person.name === newName)) {
			window.alert(`${newName} is already added to PhoneBook`);
			return;
		}

		const newPerson = {
			name: newName,
			number: newNumber,
		};
		personService.create(newPerson).then((addedPerson) => {
			setPersons(persons.concat(addedPerson));
			setNewName('');
			setNewNumber('');
		});
	};

	const handleFiltering = (e) => {
		setFilterValue(e.target.value);
	};

	const deletePerson = (id) => {
		personService.remove(id).then(() => {
			const deletedPerson = persons.find((person) => person.id === id);

			if (window.confirm(`Delete ${deletedPerson.name} ?`))
				setPersons(persons.filter((person) => person.id !== id));
		});
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
			<PersonList persons={finalList} deletePerson={deletePerson} />
		</div>
	);
};

export default App;
