import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GeneralCountry from './components/GeneralCountry'
import CountryDetails from './components/CountryDetails'

const App = () => {
    const [filter, setFilter] = useState('')
    const [countryNames, setCountryNames] = useState([])

    console.log(filter);
    useEffect(() =>{
    axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(result=>{
            var allCountries = result
                .data
            setCountryNames(allCountries)
        })
    }, [])

    const onFilterChanged = (event) => {
        setFilter(event.target.value)
    }

    const filteredCountryNames = countryNames
        .filter(item => item.name.includes(filter))
    return <div>
        <div>
            find countries <input value={filter} onChange={onFilterChanged}/>
        </div>
        { filteredCountryNames.length === 1 
        ? <CountryDetails country={filteredCountryNames[0]} />
        :filteredCountryNames.map(item => <GeneralCountry key={item.name} name={item.name}/>)
    }
    </div>
}

export default App