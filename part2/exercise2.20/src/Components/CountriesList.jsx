/* eslint-disable react/prop-types */

import Country from './Country';

const CountriesList = ({ Countries, showCountry }) => {
	const TOO_MANY_CNTS = Countries.length > 10;
	const ENOUGH_CNTS = Countries.length <= 10 && Countries.length > 1;
	const ONLY_ONE_CNT = Countries.length === 1;

	let final_res = null;

	if (TOO_MANY_CNTS) final_res = 'Too Many Matches Specify Another Filter';
	else if (ENOUGH_CNTS)
		final_res = Countries.map((country) => (
			<p key={country.name.common}>
				{country.name.common}{' '}
				<button onClick={() => showCountry(country.name.common)}>show</button>
			</p>
		));
	else if (ONLY_ONE_CNT) final_res = <Country details={Countries[0]} />;
	return <div>{final_res}</div>;
};

export default CountriesList;
