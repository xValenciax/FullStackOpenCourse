import { useState } from 'react';

const Statistics = ({feedback}) => {
  if(feedback[0] || feedback[1] || feedback[2]){

    const all = feedback[0] + feedback[1] + feedback[2];
    const average = all / 3;
    const positive = feedback[0] / all;

    return <div>
      <p>good {feedback[0]}</p>
      <p>neutral {feedback[1]}</p>
      <p>bad {feedback[2]}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  }
  return <p>No feedback given</p>
}

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  return (
    <div className="App">
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h2>statistics</h2>
      <Statistics feedback={[good, neutral, bad]}/>
    </div>
  )
}

export default App
