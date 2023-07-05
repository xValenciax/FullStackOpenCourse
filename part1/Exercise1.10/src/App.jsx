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

const Statistics = ({ feedback }) => {
	if (feedback[0] || feedback[1] || feedback[2]) {
		const all = feedback[0] + feedback[1] + feedback[2];
		const average = (feedback[0] - feedback[2]) / all;
		const positive = (feedback[0] / all) * 100;

		return (
			<div>
				<StatisticsLine text={'good'} value={feedback[0]} />
				<StatisticsLine text={'neutral'} value={feedback[1]} />
				<StatisticsLine text={'bad'} value={feedback[2]} />
				<StatisticsLine text={'all'} value={all} />
				<StatisticsLine text={'average'} value={average} />
				<StatisticsLine text={'positive'} value={positive} />
			</div>
		);
	}
	return <p>No feedback given</p>;
};

function App() {
	const [good, setGood] = useState(0);
	const [bad, setBad] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const all = good + neutral + bad;
	const average = (good - bad) / all;
	const positive = (good / all) * 100;

	return (
		<div className='App'>
			<h2>give feedback</h2>
			<Button handler={() => setGood(good + 1)} text={'good'} />
			<Button handler={() => setNeutral(neutral + 1)} text={'neutral'} />
			<Button handler={() => setBad(bad + 1)} text={'bad'} />

			<h2>statistics</h2>
			<Statistics feedback={[good, neutral, bad]} />
		</div>
	);
}

export default App;
