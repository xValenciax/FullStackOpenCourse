import React from 'react';
import Header from './Header';
import Total from './Total';
import Content from './Content';

const Course = ({course}) => {
  const sum = course.parts.reduce((sum, part) => sum += part.exercises, 0);
  return(
    <div>
      <Header courseName={course.name}/>
      <Content parts={course.parts}/>
      <Total sum={sum}/>
    </div>
  )
}

export default Course