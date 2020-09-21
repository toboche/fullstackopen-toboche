import React from 'react'

const Person = ({person}) => (
    <div key={person.name}>{person.name} {person.phone}</div>
)

export default Person