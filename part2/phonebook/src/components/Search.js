import React from 'react'

export default function Search(props) {
    return (
        <>
                <h2> search phonebook </h2>
                <input
                value={props.value}
                onChange={props.onChange}
                />
        </>
    )
}
