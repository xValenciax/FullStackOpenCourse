import { useState } from 'react';

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
	const [newName, setNewName] = useState('');
	let found = false;

	const handleNewNames = (e) => {
		setNewName(e.target.value);
	};
	const addPerson = (e) => {
		e.preventDefault();
		const newPerson = {
			name: newName,
		};
		setPersons(persons.concat(newPerson));
		setNewName('');
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={handleNewNames} />
					<br />
					<br />
					debug: {newName}
					<br />
					<br />
				</div>
				<div>
					<button type='submit'>add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<b key={person.name}>
					<p>{person.name}</p>
				</b>
			))}
		</div>
	);
};

export default App;
