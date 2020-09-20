import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const onNameSubmit = (event) => {
    event.preventDefault()
    if(persons.map(item=> item.name).includes(newName)){
      window.alert(`name ${newName} already exists`)
      return
    }else{
      const newPersons = persons.concat(
          {
            name: newName,
            phone: newPhone
          }
      )
      setPersons(newPersons)
      setNewName('')
    }
  }

  const filteredPersons = persons
    .filter(person => person.name.includes(filter))
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={(event) => setFilter(event.target.value)} />
      <form onSubmit={onNameSubmit}>
        <div>
          name: <input key='name' value={newName} onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
          phone: <input key='phone' value={newPhone} onChange={event => setNewPhone(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App