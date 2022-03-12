import React from 'react'

export default function Person(props) {
 // console.log("person id ", props.id)
    return (
        <div key={props.id} style={{display : 'flex'}}>
          <p > name :{props.name}  ,  number :{props.number}</p>
          <button onClick={() => props.handleDelete(props.id)}> 
               delete </button>
        </div>
    )
}
