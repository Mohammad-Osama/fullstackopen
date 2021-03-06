import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  return (
    <>
      <tr>
        <td>
          {props.text}
        </td>

        <td>
          {props.value}  {props.text === "positive" && " %"}
        </td>
      </tr>
    </>
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


  const total = () => {
    let total = good + neutral + bad
    return total
  }

  const average = (total) => {
    let average = (good - bad) / total
    return average
  }
  const positive = (total) => {
    let positive = (good / total) * 100
    return positive
  }


  return (
    <div  >

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
          <h1>Statistics</h1>
        </div>

        <div>
          <table>
            <tbody>
              <Statistics value={good} text="good" />
              <Statistics value={neutral} text="neutral" />
              <Statistics value={bad} text="bad" />
            </tbody>
          </table>
          <br></br>
          {!total() & !average(total()) & !positive(total())
            ? <p>no feedback given</p>
            : <table>
              <tbody>
                <Statistics value={total()} text="total" />
                <Statistics value={average(total())} text="average" />
                <Statistics value={positive(total())} text="positive" />
              </tbody>
            </table>
          }

        </div>

      </div>

    </div>
  )
}

export default App