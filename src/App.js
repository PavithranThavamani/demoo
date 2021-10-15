import logo from "./logo.svg";
import "./App.css";
import Arrow from "./Arrow";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save t00000000o reload.
        </p>
        <Arrow />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          My React App
        </a>
      </header>
    </div>
  );
}

export default App;
