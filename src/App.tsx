import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings';
import { Container, Grid, Paper } from '@mui/material';



function App() {

  const [counter, setCounter] = useState(0)
  const [max, setMax] = useState(5);
  const [start, setStart] = useState(0)


  return (
    <div className="App">
      <Paper elevation={5} style={ {padding: "15px"} }>
      <Counter 
      max={max}
      counter={counter}
      setCounter={setCounter}
      start={start}
      />
      </Paper>
      <Paper elevation={5} style={ {padding: "15px"} }>
      <Settings 
      setCounter={setCounter}
      setMax={setMax}
      max={max}
      counter={counter}
      setStart={setStart}
      />
      </Paper>
    </div>

  );
}

export default App;
