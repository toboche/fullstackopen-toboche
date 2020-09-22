import React, {useState, useEffect} from 'react'
import axios from 'axios'

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
        {filteredCountryNames.map(item => <div key={item.name}>{item.name}</div>)}
    </div>
}

export default App