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

const Header = ({ courseName }) => <h2>{courseName}</h2>

const Total = ({ sum }) => <p>Total of {sum} exercises</p>

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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web-Development Curriculum</h1>
      {
        courses.map((course) => <Course course={course} />)
      }
    </div>
  )
}

export default App