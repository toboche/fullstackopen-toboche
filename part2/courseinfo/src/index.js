import React from 'react'
import ReactDOM from 'react-dom'

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

  return (
    <Course course={course} />
  )
}

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Course = ({course}) =>(
  <div>
    <Header course={course.name}/>
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

const Content = (props) => (
  <div>
    {props.parts.map(part => <Part key={part.id} part={part} />)}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => {
  // console.log(props);
  return (
    <p>
      <b>
        total of {props.parts
        .map(item => item.exercises)
        .reduce((sum, item) => {
          console.log(item.exercises)
          return sum + item
        })} exercises
    </b>
    </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))