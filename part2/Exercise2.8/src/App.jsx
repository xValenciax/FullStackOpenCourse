import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [newName, setNewName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [searchValue, setSearchValue] = useState('');

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

  const searchForUser = (event) => {
    setSearchValue(event.target.value)
  }

  /* this way only shows the item searched form, if found */
  // const displayedList = searchValue? persons.filter(person => person.name.toLowerCase().startsWith(searchValue) === searchValue.toLowerCase()) : persons;

  /* better way to implement the search */
   const displayedList = searchValue? persons.filter(person => person.name.toLowerCase().startsWith(searchValue)) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input value={searchValue} onChange={searchForUser}/>
      </div>
      <h2>Add a new phone</h2>
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
          displayedList.map(person => <p key={person.name}>{person.name} {person.number}</p>)
        }
      </div>
    </div>
  )
}

export default App