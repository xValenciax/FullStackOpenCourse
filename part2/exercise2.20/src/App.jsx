import { useState, useEffect } from 'react';
import Notification from './Components/Notification';
import CountriesList from './Components/CountriesList';
import axios from 'axios';
import Country from './Components/Country';

const App = () => {
	const [countries, setCountries] = useState([]);
	const [status, setStatus] = useState(null);
	const [mssg, setMssg] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const [info, setInfo] = useState(null);

	const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api';

	useEffect(() => {
		axios
			.get(`${BASE_URL}/all`)
			.then((res) => {
				setCountries(res.data);
				setStatus(true);
				setMssg('Countries Fetched Successfully');
			})
			.catch((err) => {
				setStatus(false);
				setMssg(`an error has happened ${err}`);
			});
	}, []);

	const handleSearch = (e) => {
		setSearchValue(e.target.value);
	};

	const showCountry = (name) => {
		axios.get(`${BASE_URL}/name/${name}`).then((res) => {
			setInfo(res.data);
			console.log(res.data);
		});
	};

	const goBack = () => setInfo(null);

	let countriesToShow = countries.filter((country) =>
		country.name.common.toLowerCase().startsWith(searchValue.toLowerCase())
	);
	return (
		<div>
			<Notification status={status} mssg={mssg} />
			find countries:{' '}
			<input
				type='search'
				name='countrySearch'
				value={searchValue}
				onChange={handleSearch}
			/>
			{info !== null ? (
				<Country details={info} backOption={true} goBack={goBack} />
			) : (
				<CountriesList Countries={countriesToShow} showCountry={showCountry} />
			)}
		</div>
	);
};

export default App;
