import React, { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import T_Component2 from './Component2';

export default function Tester1 () {
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

  //바인딩 테스트
  var bindStr = "bindStr";
  var bindStyle = {color:'blue', fontSize:'10px'};

  //stat 테스트
  //let [글제목, 글제목변경] = useState("남자 코트 추천");
  let [글제목, 글제목변경] = useState(["남자 코트 추천1", "여자 코트 추천"]);

  function bindFn(){
    return 200;
  }
  return (
    <div>
      <h1 className='App'>T_component1_seq0</h1>
      <T_Component2 />
      <h1>{글제목[1]}</h1>
      <h1>{bindStr}</h1>
      <h1 style={{color:'red', fontSize:'30px'}}>{bindStr}2</h1>
      <h1 style={bindStyle}>{bindStr}3</h1>
      <h1>{bindFn()}</h1>
      <img src={logo} />
    </div>
  );
}



