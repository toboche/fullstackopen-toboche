import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { findAllByText } from '@testing-library/react'

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
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {allCount}</div>
      <div>average {(good-bad)/allCount}</div>
      <div>positive {good/allCount*100}%</div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)