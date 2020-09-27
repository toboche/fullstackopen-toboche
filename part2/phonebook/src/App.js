import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personsService from './services/persons'
import './index.css'
import Notification from './components/Notification'
import ErrorNotification from './components/ErrorNotification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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
      const confirmed = window.confirm(`${newName} already is already in the phonebook. update?`)
      if(confirmed){
        const person = persons.find(item => item.name === newName)
        personsService
          .update({...person, phone: newPhone})
          .then(updatedPerson => {
            setMessage('Person updated')
            setTimeout( () =>
              setMessage(null)
            ,5000)
            setPersons(persons.map(item => item.id===person.id? updatedPerson: item))
          })
      }
    } else {
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
          setMessage('Person added')
          setTimeout( () =>
              setMessage(null)
            ,5000)
      })
    }
  }

  const deletePerson = (person) => {
    console.log('delete');
    const del = window.confirm(`delete that guy?`)
    if(del)
      personsService.deletePerson(person)
        .then(
          setPersons(persons.filter(p => p.id !== person.id))
        )
        .catch( error =>
          setErrorMessage(`Person ${person.name} had already been deleted`)
        )
  }

  const filteredPersons = persons
    .filter(person => person.name.includes(filter))
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <ErrorNotification message={errorMessage} />
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
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App