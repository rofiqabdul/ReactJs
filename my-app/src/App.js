import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import ComponentFunction from './component/ComponentFunction';
// import ComponentFunctionProperties from './component/ComponentFunctionProperties';
// import Timer from './component/State';
// import HandleEvent from './component/HandleEvent';
// import ToDoList from './component/ToDoList';
import ConsumeAPI from './component/ConsumeAPI';
import Home from './component/Home';
import NotFound from './component/NotFound';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //     {/* 3. STATE */}
      //     {/* <Timer start="0"/> */}
      //     {/* <Timer start="10"/> */}
      //   </header>
      //     {/* 4. HANDLE EVENT */}
      //     {/* <HandleEvent /> */}
      // </div>

      // <ToDoList />
      // <ConsumeAPI />

      <BrowserRouter>
        <div>
          <nav>
            <li> <Link to='/' > Home </Link> </li>
            <li> <Link to='/consume-api' > Consume API </Link> </li>
          </nav>

          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/consume-api' exact component={ConsumeAPI} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
