import React from 'react'

export default function CountryDetailed(props) {
   // console.log("single props", props)
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
                        return <li key = {x}>{x}</li>

                    })}
                </ul>

            </div>
            <div>
                <img src={props.details.flags.png} />
            </div>


        </>
    )
}
