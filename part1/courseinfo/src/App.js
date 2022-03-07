import { useState } from "react"
const App = () => {
   // const course = 'Half Stack application development'

  /* const parts = [{ part: 'Fundamentals of React', exercises: 10 },
  { part: 'Using props to pass data', exercises: 7 },
  { part: 'State of a component', exercises: 14 },
  ]
 */

  /* const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
 */


  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    return (
      <h1>{props.course.name}</h1>
    )
  }

  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }

  const Content = (props) => {
    return (
      <div>
        {props.course.parts.map((x, index) => {
          return (<Part part={x.name}
            exercises={x.exercises}
            key={index} />)
        })
        }
      </div>)
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

  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    44444
  )

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />

      <div>{counter}</div>
    </div>
  )
}

export default App
