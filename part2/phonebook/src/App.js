import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    const typedname={
      name :newName
    }
    const existingNames = persons.map((person)=>{
     return person.name
    })
   console.log("existingNames", existingNames)

   if (existingNames.includes(newName)) {
    alert(`${newName} is already added to the phonebook`)
    return
  }
       
          setPersons(persons.concat(typedname))
          setNewName('')
    

  }

  const handleChange=(e)=>{
    console.log("input target.value" ,  e.target.value)
    setNewName(e.target.value)

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input
                      value={newName}
                      onChange={handleChange}
                      />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>


      <h2>Numbers</h2>
      {persons.map((person)=>(
        <p key={person.name}>
                   {person.name}</p>

      ))}
    </div>
  )
}

export default App