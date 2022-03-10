import React from 'react'

export default function Form(props) {

   
    return (
                <form onSubmit={props.handleSubmit}>
                <div>
                name: <input name="name"
                    value={props.newName}
                    onChange={props.handleChangeName}
                />
                </div>
                <div>
                number: <input name="number"
                    type="number"
                    value={props.newNumber}
                    onChange={props.handleChangeNumber}
                />
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
    )
}
