import Person from './Person';
/* eslint-disable react/prop-types */

const PersonList = ({ persons }) => {
	return (
		<>
			{persons.map((person) => (
				<Person key={person.name} person={person} />
			))}
		</>
	);
};

export default PersonList;
