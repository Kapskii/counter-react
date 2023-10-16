import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings';



function App() {

  const [counter, setCounter] = useState(0)
  const [max, setMax] = useState(5);
  const [start, setStart] = useState(0)


  return (
    <div className="App">
      <Counter 
      max={max}
      counter={counter}
      setCounter={setCounter}
      start={start}
      />
      <Settings 
      setCounter={setCounter}
      setMax={setMax}
      max={max}
      counter={counter}
      setStart={setStart}
      />
    </div>
  );
}

export default App;
