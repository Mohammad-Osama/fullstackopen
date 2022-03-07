import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
      </button>
  )
 }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <div style={{textAlign:"center"}}>

      <div>
        <h1>give feedback</h1>
      </div>
      <div>
         
        <Button onClick={handleClickGood} text="good" /> {""}
        <Button onClick={handleClickNeutral} text="neutral" /> {""}
        <Button onClick={handleClickBad} text="bad" />
      </div>
      <div>
          <div>
            <h1>give feedback</h1>
          </div>
          <div>
            <p> {good}  </p>
            <p> {neutral}  </p>
            <p> {bad}  </p>
          </div>
         
      </div>

    </div>
  )
}

export default App