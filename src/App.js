import React from 'react';
import './App.css';
import Box from "./Box"


function App() {

  const colors=["green", "red", "yellow", "blue"]
  const selectedNumer=Math.floor(Math.random()*4+1)
  return (
    <div className="App">
      <h1 id="level-title">Press A Key to Start</h1>
        <div className="container">
            <div className="row">
              <Box number={1} selectedNumer={selectedNumer} id="green" className= "btn green"/>
              <Box number={2} selectedNumer={selectedNumer} id="red" className= "btn red"/>
            </div>
            <div className="row">
              <Box number={3} selectedNumer={selectedNumer} id="yellow" className= 'btn yellow'/>
              <Box number={4} selectedNumer={selectedNumer} id="blue" className= "btn blue"/>
            </div>
        </div>
    </div>
  );
}

export default App;
