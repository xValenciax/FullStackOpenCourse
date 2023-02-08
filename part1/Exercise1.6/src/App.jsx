import { useState } from 'react';

const Button = ({text, feedbackHandler}) => {
  return <button style={{padding: '10px', marginRight: '10px'}} onClick={feedbackHandler(text)}>{text}</button>
}

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const feedbackHandler = (type) => {
    switch(type){
      case 'Good':
        return () => setGood(good + 1)
      case 'Neutral':
        return () => setNeutral(neutral + 1)
      case 'Bad':
        return () => setBad(bad + 1)
    }
  }

  return (
    <div className="App">
      <h2>give feedback</h2>

      <Button text={'Good'} feedbackHandler={feedbackHandler}/>
      <Button text={'Neutral'} feedbackHandler={feedbackHandler}/>
      <Button text={'Bad'} feedbackHandler={feedbackHandler}/>

      <h2>statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )
}

export default App
