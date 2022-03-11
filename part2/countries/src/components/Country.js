import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CountryDetailed from './CountryDetailed'

export default function Country(props) {
 // <Link to={`/country/${x.name}`}></Link>

 const [show, setShow] = useState(false)
  if (show===false)
    return (
        <div style={{display:"flex"}}>
            <p>   {props.details.name.official}  </p> 
            
             <button  onClick={()=>setShow(!show)}>full view</button>
             
             <br/>
        </div>
    )

    else 
    return (
        <>
        <CountryDetailed  details={props.details}/>
        <button  onClick={()=>setShow(!show)}>simple view</button>
        </>
    )
}
