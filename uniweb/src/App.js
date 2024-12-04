// import logo from './universityEmblem_processed.png';
import './App.css';
import React from 'react';
import DynamicTextWithObserver from "./components/DynamicTextWithObserver";
import LogoHeader from './components/LogoFrontPage';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <LogoHeader />
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1>Welcome To a Brighter Future</h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
      {/* Render the dynamic text component */}
      <DynamicTextWithObserver />
      </header>
    </div>
  );
}

export default App;
