import React,{useEffect} from 'react';
import './App.css';
import Box from "./Box"


function App() {

  //const colors=["green", "red", "yellow", "blue"]
  var userSelectedList=[]
  useEffect(() => {
    document.addEventListener("keydown", selectedNumer);
    document.addEventListener("click",printNumber);

    return () => {
      document.removeEventListener("keydown", selectedNumer);
      document.removeEventListener("click",printNumber);
    };
  }, );
  const printNumber=(e)=>{
    if(e.target.className.includes("btn")){
      userSelectedList.push(e.target.id)
      console.log(userSelectedList);
    };

  }
  const selectedNumer=(e)=>{

    console.log(Math.floor(Math.random()*4));
  }
  return (
    <div className="App">
      <h1 id="level-title">Press A Key to Start</h1>
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
