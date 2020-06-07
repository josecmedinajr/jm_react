import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Darkmode from 'darkmode-js';

new Darkmode().showWidget();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          José Carlos Medina's react portfolio is coming - check back soon!
        </p>
        
      </header>
    </div>
  );
}

export default App;
