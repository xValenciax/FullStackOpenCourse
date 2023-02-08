import { useState } from 'react';

const StatisticsLine = ({text, value}) =>{
  return <p>{text} {value}</p>
}

const Button = ({text, handler}) => {
  return <button onClick={handler}>{text}</button>
}

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all * 100;


  return (
    <div className="App">
      <h2>give feedback</h2>
      <Button handler={() => setGood(good + 1)} text={'good'} />
      <Button handler={() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button handler={() => setBad(bad + 1)} text={'bad'} />

      <h2>statistics</h2>
      <StatisticsLine text={'good'} value={good}/>
      <StatisticsLine text={'neutral'} value={neutral}/>
      <StatisticsLine text={'bad'} value={bad}/>
      <StatisticsLine text={'all'} value={all}/>
      <StatisticsLine text={'average'} value={average}/>
      <StatisticsLine text={'positive'} value={positive}/>
    </div>
  )
}

export default App
