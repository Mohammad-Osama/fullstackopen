import React from 'react'
import axios from 'axios'
import { useEffect ,useState } from 'react'


export default function CountryDetailed(props) {
   // console.log("single props", props)
   const [weather, setWeather] = useState()



   useEffect(() => {
       const name = props.details.capital
       const api_key = process.env.REACT_APP_API_KEY
       axios
       .get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}&units=metric`)
       .then(res => {
        setWeather(res.data)
        console.log('weather data', res.data)
           } )
       
   }, [])

   if (weather===undefined)
     return (
          <div>Loading...</div>
               )
       else        
    return (
        <>
            <div>
                <h2>{props.details.name.official} </h2>

            </div>
            <div>
                <p>capital : {props.details.capital}</p>
                <p>area  :{props.details.area} </p>

            </div>
            <div>
                <h3>languages  </h3>
                <ul>
                    {Object.values(props.details.languages).map((x) => {
                        return <li key = {x}>
                                    {x}
                                </li>

                    })}
                </ul>

            </div>
            <div>
                <img src={props.details.flags.png} />
            </div>
            <div>
                <h3>Weather in {props.details.capital}</h3>
                <p>temperature : {weather.main.temp}  C </p>
                <img  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                <p>Wind: {weather.wind.speed} km/h , {weather.wind.deg} deg </p>
            </div>


        </>
    )
}
