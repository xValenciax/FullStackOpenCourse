import { useState, useEffect } from 'react';
import PersonList from './Components/PersonList';
import AddContactForm from './Components/AddContactForm';
import SearchPersons from './Components/SearchPersons';
import Notification from './Components/Notification';
import personService from './services/persons';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filterValue, setFilterValue] = useState('');
	const [message, setMessage] = useState(null);
	const [status, setStatus] = useState(true);

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

	const handleFiltering = (e) => {
		setFilterValue(e.target.value);
	};

	const addPerson = (e) => {
		e.preventDefault();
		const ps = persons.find((person) => person.name === newName);

		// if (
		// 	ps &&
		// 	ps.phone !== newNumber &&
		// 	window.confirm(
		// 		`${newName} is already added to PhoneBook, replace the old number with the new one?`
		// 	)
		// ) {
		// 	const changedPerson = { ...ps, number: newNumber };
		// 	personService
		// 		.update(ps.id, changedPerson)
		// 		.then((returnedPerson) => {
		// 			setPersons(
		// 				persons.map((person) =>
		// 					person.id === changedPerson.id ? returnedPerson : person
		// 				)
		// 			);
		// 			setStatus(true);
		// 			setMessage(`${changedPerson.name}'s number is changed successfully`);
		// 			setNewName('');
		// 			setNewNumber('');
		// 			setTimeout(() => setMessage(null), 5000);
		// 		})
		// 		.catch((error) => {
		// 			setStatus(false);
		// 			setNewName('');
		// 			setNewNumber('');
		// 			setPersons(
		// 				persons.filter((person) => person.id !== changedPerson.id)
		// 			);
		// 			setMessage(`${changedPerson.name}'s already deleted\n${error}`);
		// 			setTimeout(() => setMessage(null), 5000);
		// 		});
		// 	return;
		// }
		if (ps) {
			window.alert(
				`${newName} is already added to PhoneBook with the same phone number`
			);
			return;
		}

		const newPerson = {
			name: newName,
			phone: newNumber,
		};
		personService.create(newPerson).then((addedPerson) => {
			setPersons(persons.concat(addedPerson));
			setNewName('');
			setNewNumber('');
			setMessage(`${addedPerson.name} is added successfully`);
			setTimeout(() => setMessage(null), 5000);
		});
	};

	const deletePerson = (id) => {
		const deletedPerson = persons.find((person) => person.id === id);
		if (window.confirm(`Delete ${deletedPerson.name} ?`)) {
			personService.remove(id).then(() => {
				setPersons(persons.filter((person) => person.id !== id));
				setMessage(`${deletedPerson.name} is deleted successfully`);
				setTimeout(() => setMessage(null), 5000);
			});
		}
	};

	const finalList = filterValue
		? persons.filter((person) =>
				person.name.toLowerCase().startsWith(filterValue.toLowerCase())
		  )
		: persons;

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={message} status={status} />
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
