import { Fragment } from 'react';

/* eslint-disable react/prop-types */
const Header = ({ name }) => <h1>{name}</h1>;

const Total = ({ sumOfExercises }) => {
	return (
		<b>
			<p>
				Total of {sumOfExercises}{' '}
				{sumOfExercises > 1 ? 'exercises' : 'exercise'}
			</p>
		</b>
	);
};

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

const Course = ({ courses }) => {
	return (
		<>
			{courses.map((course) => {
				const exercisesTotal = course.parts.reduce(
					(sum, part) => sum + part.exercises,
					0
				);
				return (
					<Fragment key={course.id}>
						<Header name={course.name} />
						<Content parts={course.parts} />
						<Total sumOfExercises={exercisesTotal} />
					</Fragment>
				);
			})}
		</>
	);
};

export default Course;
