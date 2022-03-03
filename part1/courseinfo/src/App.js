const App = () => {
  const course = 'Half Stack application development'

  const parts = [{ part: 'Fundamentals of React', exercises: 10 },
  { part: 'Using props to pass data', exercises: 7 },
  { part: 'State of a component', exercises: 14 },
  ]


  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14


  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
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
        {props.parts.map((x, index) => {
          return (<Part part={x.part}
                        exercises={x.exercises}
                        key={index} />)
        })
        }
      </div>)
  }


  const Total = () => {
    return (<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>)
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total />
    </div>
  )
}

export default App
