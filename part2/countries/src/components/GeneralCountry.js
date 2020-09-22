import React from 'react'

const GeneralCountry = ({name, onClick}) =>(
    <div key={name}>{name}
    <button onClick={(event) => onClick(name)}>show</button>
    </div>
)

export default GeneralCountry