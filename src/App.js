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
          (function () {
            var jsx = [];
            for (var i = 0; i < 3; i++) {
              jsx.push(
                <React.Fragment key={i}>
                  Counter {i} defined by {`<Counter init='5' end='${10 + i}' />`} : <br />
                  <Counter init='5' end={10 + i} />
                  <br /><br />
                </React.Fragment>
              );
            }
            return jsx;            
          })()
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
