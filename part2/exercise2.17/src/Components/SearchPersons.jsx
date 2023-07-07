/* eslint-disable react/prop-types */

const SearchPersons = ({ filterValue, handleFiltering }) => {
	return (
		<div>
			filter shown with <input value={filterValue} onChange={handleFiltering} />
		</div>
	);
};

export default SearchPersons;
