import logo from './logo-vives.svg';
import './App.css';
import Counter from './Counter.js'
import React from 'react';

function App() {
  const name = "John Doe";
  const greeting = <h1>Hi, {name} !</h1>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {greeting}
          <button>Click</button>
        </p>
        {
          [...Array(4).keys()].slice(1).map(function (i) {
            var val = i < 3 ? '1' : '0'; // Value of the "autostart" attribute
            return (
              <React.Fragment key={i}>
                Counter {i} defined by {`<Counter autostart='${val}' init='5' end='${10 + i}' />`} : <br />
                <Counter autostart={val} init='5' end={10 + i} />
                <br /><br />
              </React.Fragment>
            )
          })
        }
        <a
          className="App-link"
          href="https://www.vives.be"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vives
        </a>
      </header>
    </div>
  );
}

export default App;
