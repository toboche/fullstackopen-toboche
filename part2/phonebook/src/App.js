import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() =>{
    axios
      .get('http://localhost:3001/persons')
      .then(response =>{
        setPersons(response.data)
      })

  }, [])

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