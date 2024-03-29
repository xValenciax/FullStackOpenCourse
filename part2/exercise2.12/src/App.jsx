import { useState, useEffect } from 'react';
import PersonList from './Components/PersonList';
import AddContactForm from './Components/AddContactForm';
import SearchPersons from './Components/SearchPersons';
import axios from 'axios';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filterValue, setFilterValue] = useState('');

	useEffect(() => {
		axios.get('http://localhost:3000/persons').then((response) => {
			setPersons(response.data);
			console.log('Promise fulfilled with the following data: ', response.data);
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
		axios.post('http://localhost:3000/persons', newPerson).then((res) => {
			setPersons(persons.concat(res.data));
			setNewName('');
			setNewNumber('');
		});
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
