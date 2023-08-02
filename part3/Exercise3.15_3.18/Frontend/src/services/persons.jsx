import axios from 'axios';

const baseURL = 'api/persons';

const getAll = () => {
	const req = axios.get(baseURL);
	return req.then((res) => res.data);
};

const create = (newPerson) => {
	const req = axios.post(baseURL, newPerson);
	return req.then((res) => res.data);
};

const remove = (id) => {
	const req = axios.delete(`${baseURL}/${id}`);
	return req.then((res) => res.data);
};

const update = (id, changedPerson) => {
	const req = axios.put(`${baseURL}/${id}`, changedPerson);
	return req.then((res) => res.data);
};

export default {
	getAll,
	create,
	remove,
	update,
};
