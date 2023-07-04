import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]);

  const [newName, setNewName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const formHandler = (event) => {
    event.preventDefault();

    const nameExists = persons.find((person) => person.name === newName);
    if(nameExists){
      alert(`${newName} is already added to phonebook`);
      return;
    }


    const newPerson = {
      name: newName,
      number: phoneNum
    }


    setPersons(persons.concat(newPerson));
    setNewName('');
    setPhoneNum('');
  }

  const addNewPerson = (event) => setNewName(event.target.value);
  const addPhoneNumber = (event) => setPhoneNum(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={formHandler}>
        <div>
          name: <input value={newName} onChange={addNewPerson}/>
        </div>
        <br />
        <div>
          number: <input value={phoneNum} onChange={addPhoneNumber}/>
        </div>
        <br />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
        }
      </div>
    </div>
  )
}

export default App