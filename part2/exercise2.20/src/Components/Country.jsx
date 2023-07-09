/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';
const Country = ({ details, backOption, goBack }) => {
	const [weatherData, setWeatherData] = useState({});
	const API_KEY = import.meta.env.VITE_API_KEY;
	const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${
		details.capital ? details.capital[0] : null
	}`;
	useEffect(() => {
		axios.get(API_URL).then((res) => {
			setWeatherData(res.data.current);
		});
	}, [API_URL]);
	const languages = Object.keys(details.languages).map((lang) => (
		<li key={lang}>{details.languages[lang]}</li>
	));
	return (
		<div>
			<h1>{details.name.common}</h1>
			<p>Capital {details.capital ? details.capital[0] : null}</p>
			<p>Area {details.area}</p>

			<h3>Languages</h3>
			<ul>{languages}</ul>

			<img src={details.flags.png} alt={details.flags.alt} />
			<div>{backOption && <button onClick={goBack}>go back</button>}</div>

			{details.capital && (
				<div>
					<h3>Weather in {details.capital[0]}</h3>
					{weatherData.condition && (
						<img src={weatherData.condition.icon} alt='' />
					)}
					<p>temperature {weatherData.temp_c} Celcius</p>
					<p>wind {weatherData.wind_kph}k/h</p>
				</div>
			)}
		</div>
	);
};

export default Country;
