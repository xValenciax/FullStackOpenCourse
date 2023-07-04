import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);

  const [newName, setNewName] = useState('');

  const formHandler = (event) => {
    event.preventDefault();

    const nameExists = persons.find((person) => person.name === newName);
    if(nameExists){
      alert(`${newName} is already added to phonebook`);
      return;
    }


    const newPerson = {
      name: newName
    }


    setPersons(persons.concat(newPerson));
    setNewName('');
  }

  const addNewPerson = (event) => setNewName(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={formHandler}>
        <div>
          name: <input value={newName} onChange={addNewPerson}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(person => <p key={person.name}>{person.name}</p>)
        }
      </div>
    </div>
  )
}

export default App