import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { findAllByText } from '@testing-library/react'

const Statistics = (props) => (
  <div>
      <h2>statistics</h2>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {props.allCount}</div>
      <div>average {(props.good-props.bad)/props.allCount}</div>
      <div>positive {props.good/props.allCount*100}%</div>
  </div>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allCount = good+bad+neutral
  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
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