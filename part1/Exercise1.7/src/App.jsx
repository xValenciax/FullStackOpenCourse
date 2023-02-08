import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const all = good + bad + neutral;
  const average = all / 3;
  const positive = good / all;

  return (
    <div className="App">
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h2>statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>all {all}</p>
      <p>average ({average} / 3)</p>
      <p>positive  {positive}</p>
    </div>
  )
}

export default App
