import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <img
        src={logo}
        alt="SpaceX Logo"
        style={{
          width: 150,
          height: 100,
          margin: 'auto 0',
          filter: 'brightness(0) invert(1)',
        }}
      />
    </div>
  );
}

export default App;
