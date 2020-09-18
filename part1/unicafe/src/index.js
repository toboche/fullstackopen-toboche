import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// import { findAllByText } from '@testing-library/react'

const Statistic = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  if(props.allCount===0)
    return (
      <div>No  feedback given</div>
    )
  else
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <Statistic text={'good'} value={props.good}/>
            <Statistic text={'neutral'} value={props.neutral}/>
            <Statistic text={'bad'} value={props.bad}/>
            <Statistic text={'all'} value={props.allCount}/>
            <Statistic text={'average'} value={(props.good - props.bad) / props.allCount}/>
            <Statistic text={'positive'} value={props.good / props.allCount * 100 +'%'}/>
          </tbody>
        </table>
      </div>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allCount = good+bad+neutral
  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good+1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral+1)} text='neutral'/>
      <Button handleClick={() => setBad(bad+1)} text='bad'/>
      <Statistics good={good} 
      bad={bad} 
      neutral={neutral}
      allCount={allCount}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)