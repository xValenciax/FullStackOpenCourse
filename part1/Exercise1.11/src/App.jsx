import { useState } from 'react';

const StatisticsLine = ({ text, value }) => {
	return (
		<p>
			{text} {value}
		</p>
	);
};

const Button = ({ text, handler }) => {
	return <button onClick={handler}>{text}</button>;
};

const StatTable = ({ Statistics }) => {
	return (
		<table>
			<tbody>
				<tr>
					<td>good</td>
					<td>{Statistics.good}</td>
				</tr>
				<tr>
					<td>neutral</td>
					<td>{Statistics.neutral}</td>
				</tr>
				<tr>
					<td>bad</td>
					<td>{Statistics.bad}</td>
				</tr>
				<tr>
					<td>all</td>
					<td>{Statistics.all}</td>
				</tr>
				<tr>
					<td>average</td>
					<td>{Statistics.average ? Statistics.average : 0}</td>
				</tr>
				<tr>
					<td>positive</td>
					<td>{Statistics.positive ? Statistics.positive : 0}%</td>
				</tr>
			</tbody>
		</table>
	);
};

function App() {
	const [good, setGood] = useState(0);
	const [bad, setBad] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const all = good + neutral + bad;
	const average = Math.abs(good - bad) / all;
	const positive = (good / all) * 100;
	const Stat = {
		good: good,
		bad: bad,
		neutral: neutral,
		all: all,
		average: average,
		positive: positive,
	};

	return (
		<div className='App'>
			<h2>give feedback</h2>
			<Button handler={() => setGood(good + 1)} text={'good'} />
			<Button handler={() => setNeutral(neutral + 1)} text={'neutral'} />
			<Button handler={() => setBad(bad + 1)} text={'bad'} />

			<h2>statistics {good}</h2>
			<StatTable Statistics={Stat} />
		</div>
	);
}

export default App;
