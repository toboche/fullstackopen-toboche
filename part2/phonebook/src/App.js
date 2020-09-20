import React, { useState } from 'react'

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
      <div >
        filter shown with <input value={filter} onChange={(event) => setFilter(event.target.value)}/>
      </div>
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
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      {filteredPersons.map(person => <div key={person.name}>{person.name} {person.phone}</div>)}
    </div>
  )
}

export default App