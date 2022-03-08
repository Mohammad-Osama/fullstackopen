import React from 'react'
import Header from './Header'
import Content from './Content'

export default function Course(props) {
    return (
        <>
        <Header name={props.course.name} />
        <Content parts={props.course.parts} />
        </>
    )
}
