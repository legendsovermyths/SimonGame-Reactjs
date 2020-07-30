import React,{useEffect,useState} from 'react';
import {RandomBlink} from "./utils"
import './App.css';
import Box from "./Box"


function App() {

  const colors=["green", "red", "yellow", "blue"]
  const [level,setLevel]=useState(1)
  const [heading,setHeading]=useState("Press 'A' Key to Start")

  var gameSelectedList=[]
  var userSelectedList=[]
  useEffect(() => {
    document.addEventListener("keydown", restartGame);
    document.addEventListener("click",printNumber);

    return () => {
      document.removeEventListener("keydown", restartGame);
      document.removeEventListener("click",printNumber);
    };
  }, );
  const printNumber=(e)=>{
    console.log(e.target);
    if(e.target.className.includes("btn")){
      e.target.className="fadeOut "+e.target.id+" btn"
      setTimeout(()=>e.target.className="fadeIn "+e.target.id+" btn",100)
    };

  }
  const restartGame=(e)=>{
    if(e.key==="a"){
        gameSelectedList=[]
        userSelectedList=[]
        console.log(e.key);
        var selectNumer=RandomBlink(colors)
        gameSelectedList.push(colors[selectNumer])
        console.log(gameSelectedList);
        setLevel(1)
        setHeading("Level "+level)
  }
  }
  return (
    <div className="App">
      <h1 id="level-title">{heading}</h1>
        <div className="container">
            <div className="row">
              <Box  id="green" className= "btn green"/>
              <Box  id="red" className= "btn red"/>
            </div>
            <div className="row">
              <Box id="yellow" className= 'btn yellow'/>
              <Box id="blue" className= "btn blue"/>
            </div>
        </div>
    </div>
  );
}

export default App;
