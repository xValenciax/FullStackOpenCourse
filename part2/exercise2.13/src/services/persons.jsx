import axios from 'axios';

const baseURL = 'http://localhost:3000/persons';

const getAll = () => {
	const req = axios.get(baseURL);
	return req.then((res) => res.data);
};

const create = (newPerson) => {
	const req = axios.post(baseURL, newPerson);
	return req.then((res) => res.data);
};

// const update = (id, changedPerson) => {
// 	const req = axios.get(`${baseURL}/${id}`, changedPerson);
// 	return req.then((res) => res.data);
// };

export default {
	getAll,
	create,
	// update,
};
