import { useState, useEffect } from 'react'
import Form from './components/Form'
import Person from './components/Person'
import Search from './components/Search'
import Notification from './components/Notification'
import axios from 'axios'
import * as api from './services/api'

const App = () => {
  const [persons, setPersons] = useState([])


  const [newName, setNewName] = useState('')
  const [newNumber, setNewnumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchResults, setSearchResults] = useState('')
  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    //  console.log("submit target value name " , e.target.name.value)
    // console.log("submit target value number " , e.target.number.value)
    e.preventDefault()
    const typedContact = {
      name: newName,
      number: newNumber
    }

    // const existingName = [...persons]
    const existingName = persons.map((person) => {
      return person.name
    })
    console.log("existingName", existingName)

    const clearInput = () => {
      setNewName('')
      setNewnumber('')
    }

    const notify = (name, message) => {
      setNotification(`${name} ${message} `)
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }


    if (existingName.includes(newName)) {
      let confirmUpdate = window.confirm(`${newName} is already added to the phonebook , update number? `)
      if (confirmUpdate) {
        const filtered = persons.filter(x =>
          x.name === newName
        )
        api.updatePerson(filtered[0].id, typedContact)
        clearInput()
        notify(newName, "was altered")
      }


    }
    else {
      api.addPerson(typedContact)
        .then((res) => {
          setPersons(persons.concat(res))
          clearInput()
          notify(newName, "was added")
        })

    }



    /* axios
    .post('http://localhost:3001/persons' , typedContact)
    .then ((res)=>{
      setPersons(persons.concat(res.data))
      setNewName('')
     setNewnumber('')

    }) */



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


  const handleDelete = (id) => {
    let confirmDelete = window.confirm("Confirm delete ?")
    if (confirmDelete) {
      api.deletePerson(id)
        .then((status) => {
          if (status === 200)
            api.getAll()
              .then((data) => {
                setPersons(data)
              })

        })
        .catch((error) => {
          console.error(error);
          alert("This contact is already deleted");
        });

      /*  .then(
         api.getAll()
         .then( (data)=>{
           console.log("response all " , data)
           setPersons(data)
   
         })
 
       )  */

    }




  }

  useEffect(() => {

    api.getAll()
      .then((data) => {
        console.log("response all ", data)
        setPersons(data)
      })

    /* axios
    .get('http://localhost:3001/persons')
    .then( (res)=>{
        console.log("response" , res)
        setPersons(res.data)
    }  
    ) */

  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Form handleSubmit={handleSubmit}
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
        <Person id={person.id}
          key={person.id}
          name={person.name}
          number={person.number}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default App