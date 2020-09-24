import React from 'react'

const Person = ({person, deletePerson}) => (
    <div key={person.name}>
        {person.name} {person.phone}
        <button onClick={() => deletePerson(person)}>delete</button>
    </div>
)

export default Person