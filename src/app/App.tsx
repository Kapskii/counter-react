import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from '../components/Counter';
import { Settings } from '../components/Settings';
import { Paper } from '@mui/material';
import { getFromLocalStorage, setToLocalStorage } from '../common/utils/localStorage';

export type CounterType = {
  currentValue: number
  maxValue: number
  startValue: number
}
const initialCounter: CounterType = {
  currentValue: 0,
  maxValue: 5,
  startValue: 0,
}


function App() {
  const [counterObject, setCounterObject] = useState(initialCounter)

  const setInitialStartValue = (value: number) => {
    setCounterObject({
      ...counterObject,
      startValue: value,
      currentValue: value
  })
  }
  const setInitialMaxValue = (value: number) => {
    setCounterObject({
      ...counterObject,
      maxValue: value
  })
  }

  useEffect(() => {
    getFromLocalStorage('max', setInitialMaxValue)
    getFromLocalStorage('start', setInitialStartValue)
}, [])

useEffect(() => {
  setToLocalStorage('max', counterObject.maxValue);
  setToLocalStorage('start', counterObject.startValue);
}, [counterObject.maxValue, counterObject.startValue])



  return (
    <div className="App">
      <Paper elevation={5} style={{ padding: "15px" }}>
        <Counter
          counterObj={counterObject}
          setCounter={setCounterObject}

        />
      </Paper>
      <Paper elevation={5} style={{ padding: "15px" }}>
        <Settings
          setCounter={setCounterObject}
          max={counterObject.maxValue}
          counter={counterObject.currentValue}
        />
      </Paper>
    </div>

  );
}

export default App;
