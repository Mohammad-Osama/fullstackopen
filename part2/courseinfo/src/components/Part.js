import React from 'react'

export default function Part(props) {
    return (
        <>
        {props.total
         ? <strong> total of {props.total} exercises  </strong>
         :<p>{props.name} {props.exercises} </p>
        }
        </>
        
    )
}
