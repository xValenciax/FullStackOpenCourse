import Person from './Person';
/* eslint-disable react/prop-types */

const PersonList = ({ persons, deletePerson }) => {
	return (
		<>
			{persons.map((person) => (
				<Person key={person.id} person={person} deletePerson={deletePerson} />
			))}
		</>
	);
};

export default PersonList;
