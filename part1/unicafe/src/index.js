import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { findAllByText } from '@testing-library/react'

const Statistic = (props) => (
  <div>{props.text}</div>
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
        <Statistic text={'good ' + props.good} />
        <Statistic text={'neutral ' + props.neutral}/>
        <Statistic text={'bad '+ props.bad}/>
        <Statistic text={'all ' + props.allCount}/>
        <Statistic text={'average ' + (props.good - props.bad) / props.allCount}/>
        <Statistic text={'positive ' + props.good / props.allCount * 100 +'%'}/>
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