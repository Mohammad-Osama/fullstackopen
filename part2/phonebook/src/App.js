import { useState } from 'react'
import Form from './components/Form'
import Person from './components/Person'
import Search from './components/Search'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])


  const [newName, setNewName] = useState('')
  const [newNumber, setNewnumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchResults, setSearchResults] = useState('')

  const handleSubmit = (e) => {
    //  console.log("submit target value name " , e.target.name.value)
    // console.log("submit target value number " , e.target.number.value)
    e.preventDefault()
    const typedContact = {
      name: newName,
      number: newNumber
    }
    const existingNames = persons.map((person) => {
      return person.name
    })
    // console.log("existingNames", existingNames)

    if (existingNames.includes(newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    setPersons(persons.concat(typedContact))
    setNewName('')
    setNewnumber('')

  }

  const handleChangeName = (e) => {
    // console.log("input target.value" ,  e.target.value)
    setNewName(e.target.value)

  }

  const handleChangeNumber = (e) => {
    // console.log("input target.value number" ,  e.target.value)
    // console.log("newNumber" ,  newNumber)
    setNewnumber(e.target.value)

  }

  const handleSearchName = (e) => {
   // console.log("e.target.value", e.target.value)
   // setSearchResults('')
    setSearchName(e.target.value)

    const searchedNames = persons.filter(person =>
      person.name.toLowerCase().includes(searchName.toLowerCase()))

   // console.log("searchedNames", searchedNames)
    setSearchResults(searchedNames)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Form  handleSubmit={handleSubmit}  
              newName={newName}
              handleChangeName={handleChangeName}

              newNumber={newNumber}
              handleChangeNumber={handleChangeNumber}
                                    />

      <div>
       
          <Search
            value={searchName}
            onChange={handleSearchName}
          />

        <div>
          {searchName === ''
            ? <p> input search </p>
            : searchResults && searchResults.map((person) => (
              <p key={person.name}> name :{person.name}  ,  number :{person.number}</p>
            ))
          }

        </div>
      </div>



      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person   key={person.name}
                  name={person.name}
                  number={person.number}
                            />
      ))}
    </div>
  )
}

export default App