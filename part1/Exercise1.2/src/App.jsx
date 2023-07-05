const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Part = (props) => {
	return (
		<p>
			{props.part} {props.exercises}
		</p>
	);
};

const Content = (props) => {
	return (
		<>
			<Part part={props.parts[0]} exercises={props.exercises[0]} />
			<Part part={props.parts[1]} exercises={props.exercises[1]} />
			<Part part={props.parts[2]} exercises={props.exercises[2]} />
		</>
	);
};

const Total = (props) => {
	return (
		<p>
			Number of exercises{' '}
			{props.exercises[0] + props.exercises[1] + props.exercises[2]}
		</p>
	);
};

function App() {
	const course = 'Half Stack application development';
	const part1 = 'Fundamentals of React';
	const exercises1 = 10;
	const part2 = 'Using props to pass data';
	const exercises2 = 7;
	const part3 = 'State of a component';
	const exercises3 = 14;
	const exercises = [exercises1, exercises2, exercises3];
	const parts = [part1, part2, part3];
	return (
		<div className='App'>
			<Header course={course} />
			<Content parts={parts} exercises={exercises} />
			<Total exercises={exercises} />
		</div>
	);
}

export default App;
