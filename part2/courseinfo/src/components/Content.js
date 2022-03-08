import React from 'react'
import Part from './Part'

export default function Content(props) {
    return (
        <div>
        {props.parts.map((x) => {
          return (<Part name={x.name}
                        exercises={x.exercises}
                        key={x.id} 
                   />)
          })
        }
      </div>
    )
}
