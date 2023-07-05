/* eslint-disable react/prop-types */

const Person = ({ person }) => {
	return (
		<b>
			<p>
				{person.name} {person.number}
			</p>
		</b>
	);
};

export default Person;
