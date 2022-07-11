import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tester1 from './compnent/Component1';
import List from './compnent/List';

function App() {
/*  default UI
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
      </header>
    </div>
  );*/

  /*[test] step ~ bind + State
  return (<>
    <Tester1 />
  </>)
  */

  /*[test] step ~ bind + State*/
  return <>
    <List />
  </>

}



export default App;

