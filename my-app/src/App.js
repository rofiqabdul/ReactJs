import logo from './logo.svg';
import './App.css';
import ComponentFunction from './component/ComponentFunction';
import ComponentFunctionProperties from './component/ComponentFunctionProperties';

function App() {
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
          Learn React
        </a>
        <ComponentFunction />
        <ComponentFunctionProperties name="abdul" age="25" />
        <ComponentFunctionProperties name="hidayat" age="26" />
      </header>
    </div>
  );
}

export default App;
