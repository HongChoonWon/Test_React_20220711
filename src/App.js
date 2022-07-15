/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Comp.css';
import Tester1 from './compnent/Component1';
import List from './compnent/List';
import Thumbnail_Wrapper from './compnent/Thumbnail_Wrapper';

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

  /*[test] step ~ bind + State
  return <>
    <List />
  </>
  */

  /*[test] googling 쇼밍몰 List
  return (
    <>
      <Googleling_List />
    </>
  );
  */

  /*[test] googling 쇼밍몰 List - My Cuntom*/
  return (
    <>
      <Thumbnail_Wrapper />
    </>
  );
}

export default App;
