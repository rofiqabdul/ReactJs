import logo from './logo.svg';
import './App.css';
import ComponentFunction from './component/ComponentFunction';
import ComponentFunctionProperties from './component/ComponentFunctionProperties';
import { Component } from 'react';
import Timer from './component/State';
import HandleEvent from './component/HandleEvent';
class App extends Component {
  render() {
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
          {/* 3. STATE */}
          {/* <Timer start="0"/> */}
          {/* <Timer start="10"/> */}
        </header>
          {/* 4. HANDLE EVENT */}
          <HandleEvent />
      </div>
    );
  }
}

export default App;
