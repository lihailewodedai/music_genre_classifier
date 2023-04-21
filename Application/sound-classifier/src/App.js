import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import GoButtonContainer from './components/GoButton';
import DataVisContainer from './components/dataVis';

function App() {
  const [showButton, setShowButton] = useState(true)
  const [showDataVisDiv, setShowDataVisDiv] = useState(false)


  return (
    <div className="App">
      <header className="header">
        <span className="title">Sound Classifier</span>
      </header>
      <div className="body-container">
          <GoButtonContainer showButton={showButton} setShowButton={setShowButton} setShowDataVisDiv={setShowDataVisDiv} showDataVis = {showDataVisDiv}/>
          {showDataVisDiv && <DataVisContainer />}
      </div>
      <div className="bottom-container"></div>
    </div>
  );
}

export default App;
