import { useState } from "react"
import Course from "./components/Course"
const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }



  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }



  const Total = (props) => {
    let total = 0
    return (
      <p>Number of exercises {
        props.course.parts.map((e) => {
          total += e.exercises
        })}
        {total}
      </p>)
  }

  
  return (
   
     <Course course={course} />

  )
}

export default App
