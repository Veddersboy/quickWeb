import logo from './universityEmblem_processed.png';
import './App.css';
import React from 'react';
import DynamicTextWithObserver from "./components/DynamicTextWithObserver";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My Homepage</h1>
      {/* Render the dynamic text component */}
      <DynamicTextWithObserver />
      </header>
    </div>
  );
}

export default App;
