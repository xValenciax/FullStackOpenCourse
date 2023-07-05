const Header = ({ course }) => {
	return <h1>{course.name}</h1>;
};

const Part = ({ part }) => {
	return (
		<p>
			{part.name} {part.exercises}
		</p>
	);
};

const Content = ({ course }) => {
	return (
		<>
			<Part part={course.parts[0]} />
			<Part part={course.parts[2]} />
			<Part part={course.parts[1]} />
		</>
	);
};

const Total = (props) => {
	return (
		<p>
			Number of exercises{' '}
			{props.course.parts[0].exercises +
				props.course.parts[1].exercises +
				props.course.parts[2].exercises}
		</p>
	);
};

function App() {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	};
	return (
		<div className='App'>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</div>
	);
}

export default App;
