import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import axios from 'axios'
import personsService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() =>{
    personsService
      .getAll()   
      .then(persons =>{
        setPersons(persons)
      })

  }, [])

  const onNameSubmit = (event) => {
    event.preventDefault()
    if(persons.map(item=> item.name).includes(newName)){
      window.alert(`name ${newName} already exists`)
      return
    }else{
      const newPerson = {
        name: newName,
        phone: newPhone
      }
      personsService.add(
        newPerson
      ).then( newPerson =>{
            const newPersons = persons.concat(
              newPerson
            )
          setPersons(newPersons)
          setNewName('')
      })
    
    }
  }

  console.log('got persons');
  console.log(persons);
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