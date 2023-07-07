/* eslint-disable react/prop-types */

const AddContactForm = ({
	submitHandler,
	newName,
	newNumber,
	newNameHandler,
	newNumberHandler,
}) => {
	return (
		<form onSubmit={submitHandler}>
			<div>
				name: <input value={newName} onChange={newNameHandler} />
				<br />
				number: <input value={newNumber} onChange={newNumberHandler} />
			</div>
			<br />
			<div>
				<button type='submit'>add</button>
			</div>
		</form>
	);
};

export default AddContactForm;
