import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button';
import Display from './Display';

function App() {
  const [count, setCount] = useState(0);
  const increment = (step = 1)=> setCount(count + step);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="main">
        <Display message={count} />
        <div>
          <Button onClick={increment} increment={1} /> &nbsp;
          <Button onClick={increment} increment={5}/> &nbsp;
          <Button onClick={increment} increment={10}/>
        </div>
      </div>
    </div>
  );
}

export default App;
