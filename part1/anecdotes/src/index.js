import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const next = Math.floor(Math.random()*(anecdotes.length))
  const [votes, setVotes] = useState(Array.from({length: anecdotes.length}, (x,i) => 0))
  console.log(next);
  const incrementVotes = () => {
    const newPoints = [...votes]
    newPoints[selected] += 1
    setVotes(newPoints)
  }

  const max = Math.max(...votes)

  console.log(votes);
  const maxVotesIndex = votes.findIndex((current) => current === max)
  console.log(maxVotesIndex);
  const maxVotes = votes[maxVotesIndex]
  const maxVotesAnecdote = anecdotes[maxVotesIndex]

  return (
    <div>
      <h2>
        Anecdote of the day
      </h2>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <div>
        <button onClick={() => setSelected(next)}>next anecdote</button>
        <button onClick={() => incrementVotes()}>vote</button>
      </div>
      <h2>
        Anecdote with most votes
      </h2>
      <div>
      <div>
        {maxVotesAnecdote}
      </div>
      <div>
        has {maxVotes} votes
      </div>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)