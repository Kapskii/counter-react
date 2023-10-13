import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings';

function App() {
  return (
    <div className="App">
      <Counter />
      <Settings />
    </div>
  );
}

export default App;
