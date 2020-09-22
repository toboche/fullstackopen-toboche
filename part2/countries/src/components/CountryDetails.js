import React from 'react'

const CountryDetails = ({country}) => (
    <div>
        <h2>{country.name}</h2>
        <div>capital {country.capital}</div>
        <div>popoulation {country.population}</div>
        <h3>languages</h3>
        <ul>
            {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
        </ul>
        <img src={country.flag} />
    </div>
)

export default CountryDetails