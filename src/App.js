import logo from './logo-vives.svg';
import './App.css';

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
