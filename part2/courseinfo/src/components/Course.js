import React from 'react'
import Header from './Header'
import Content from './Content'
import Part from './Part'

export default function Course(props) {


   /*  const total = ()=>{
        let total= 0 
        props.course.parts.map((e)=>{
            total += e.exercises
        })
     return total
    } */
    let initialValue = 0 
	const total = props.course.parts.reduce(
		(previousValue, currentValue) => previousValue + currentValue.exercises,
		initialValue
	);

    return (
        <>
        <Header name={props.course.name} />
        <Content parts={props.course.parts} />
        <Part total={total} />
        </>
    )
}
