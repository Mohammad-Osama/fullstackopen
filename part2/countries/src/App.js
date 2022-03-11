import axios from 'axios'
import { useState, useEffect } from 'react'
import Country from "./components/Country.js"
import CountryDetailed from './components/CountryDetailed.js'


function App() {

  const [countires, setCountries] = useState([])
  const [search, setSearch] = useState('')
   // const [searchResults, setSearchResults] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value)
  
     /* const searchedCountries = countires?.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase()))

   setSearchResults(searchedCountries) */


  }

  const searchResults = countires?.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase()))

  // setSearchResults(searchedCountries)

  // console.log("searchResults", searchResults)

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(res => {
        setCountries(res.data)
        console.log('res', res.data)
      }

      )

  }, [search])

  return (
    <div>
      <div>
        Search Countries
        <input
          value={search}
          onChange={handleChange}
        />
      </div>
      <div>
        {searchResults.length > 0
          ? [searchResults.length > 10
            ? <p>too many matches , add another filter </p>
            : searchResults.length === 1
              ? <CountryDetailed
                /*   name={searchResults.name.official} */
                /*  capital = {searchResults?.capital}
                 area = {searchResults.area}
                 languages={searchResults.languages} */
                details={searchResults[0]}
              />
              : searchResults.length === 0
                ? <p>no countires found  </p>
                : searchResults.map((c) => {
                  return <Country key={c.name.official}
                    details={c}
                  />
                })
          ]
          : <p>no countires found  </p>
        }
      </div>
    </div>
  );
}

export default App;
