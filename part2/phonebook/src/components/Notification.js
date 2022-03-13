import React from 'react'

export default function Notification(props) {
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 50
      }
    if (props.message === null) {
        return null
      }
    
      return (
        <div style={footerStyle}>
         <p> {props.message} </p>
        </div>
      )
}
