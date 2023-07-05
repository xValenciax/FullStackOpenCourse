/* eslint-disable react/prop-types */
const Header = ({ name }) => {
	return <h1>{name}</h1>;
};

// const Total = ({ sumOfExercises }) => {
// 	return <p>Number of exercises {sumOfExercises}</p>;
// };

const Part = ({ part, exercises }) => {
	return (
		<p>
			{part} {exercises}
		</p>
	);
};

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map((part) => (
				<Part key={part.id} part={part.name} exercises={part.exercises} />
			))}
		</div>
	);
};

const Course = ({ course }) => {
	return (
		<>
			<Header name={course.name} />
			<Content parts={course.parts} />
		</>
	);
};

const App = () => {
	const course = {
		id: 1,
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
				id: 1,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
				id: 2,
			},
			{
				name: 'State of a component',
				exercises: 14,
				id: 3,
			},
		],
	};

	return <Course course={course} />;
};

export default App;
