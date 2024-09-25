import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  var [cnt2, setCnt2] = useState(0);
  function increment(){
    setCnt2((cnt2)=>cnt2+1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Vives
        </a>
        <br/>
        <Counter init="10" increment2={increment}/>
        <br/>
        <div>{cnt2}</div>
      </header>
    </div>
  );
}

export default App;
