import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { 
      name: 'Arto Hellas',
      phone: '123123'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newPhone, setNewPhone] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person => <div key={person.name}>{person.name} {person.phone}</div>)}
    </div>
  )
}

export default App