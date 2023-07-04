const Course = ({course}) => {
  return(
    <div>
      <Header courseName={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}

const Header = ({ courseName }) => <h1>{courseName}</h1>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <div>
    {
      parts.map((part) => <Part key={part.id} part={part}/>)
    }
  </div>

const App = () => {
  const course =
  {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App