import React from 'react'

export default function Person(props) {
    return (
        <div key={props.id}>
          <p > name :{props.name}  ,  number :{props.number}</p>
        </div>
    )
}
