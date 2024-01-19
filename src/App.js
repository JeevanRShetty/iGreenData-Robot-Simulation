import React from 'react';
import './App.css';
import ToyRobot from '../src/components/ToyRobot'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simulation of Toy Robot</h1>
        <ToyRobot />
      </header>
    </div>
  );
}

export default App;
