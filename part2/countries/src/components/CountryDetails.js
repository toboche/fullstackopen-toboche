import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CountryDetails = ({country}) => {
    const [weatherData, setWeatherData] = useState(null)
    useEffect(() =>{
        const api_key = process.env.REACT_APP_API_KEY
        const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
        axios
            .get(url)
            .then(result =>{
                setWeatherData(result.data)
            })
    }, [])

    return <div>
        <h2>{country.name}</h2>
        <div>capital {country.capital}</div>
        <div>popoulation {country.population}</div>
        <h3>languages</h3>
        <ul>
            {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
        </ul>
        <img src={country.flag} />
        {weatherData===null
            ?<div></div>
            :<div>
                <h3>weather in {country.capital}</h3>
                <div><b>temperature: </b> {weatherData.current.temperature}</div>
                <img src={weatherData.current.weather_icons[0]}></img>
                <div><b>wind: </b>{weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}</div>
            </div>
    }
        
    </div>
}

export default CountryDetails