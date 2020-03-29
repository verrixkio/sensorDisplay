import React from 'react';
import SensorDisplay from './components/SensorDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="sensor-display">
          <SensorDisplay/>
        </div>
      </header>
    </div>
  );
}

export default App;
