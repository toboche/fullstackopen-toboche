import React from 'react'

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
  
  const Total = (props) => (
    <p>
      <b>
        total of {props.parts
          .map(item => item.exercises)
          .reduce((sum, item) => sum + item)} exercises
      </b>
    </p>
  )
  
  export default Course