/* eslint-disable react/prop-types */

const Person = ({ person, deletePerson }) => {
	return (
		<b>
			<p>
				{person.name} {person.number}{' '}
				<button onClick={() => deletePerson(person.id)}>Delete</button>
			</p>
		</b>
	);
};

export default Person;
