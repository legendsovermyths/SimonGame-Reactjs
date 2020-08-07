import React, { useEffect, useState } from "react";
import { RandomBlink, blink } from "./utils";
import "./App.css";
import Box from "./Box";

var gameSelectedList = [];
var userSelectedList = [];
function App() {
  const colors = ["green", "red", "yellow", "blue"];
  const [level, setLevel] = useState(1);
  const [heading, setHeading] = useState("Press 'A' Key to Start");
  useEffect(() => {
    document.addEventListener("keydown", restartGame);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("keydown", restartGame);
      document.removeEventListener("click", handleClick);
    };
  });

  const handleClick = (e) => {
    if (e.target.className.includes("btn")) {
      blink(e.target);
      userSelectedList.push(e.target.id);
      checkAnswer(userSelectedList, gameSelectedList, userSelectedList.length);
      if (userSelectedList.length === gameSelectedList.length) {
        checkAnswer(
          userSelectedList,
          gameSelectedList,
          userSelectedList.length
        );
      }
    }
  };
  const continueGame = () => {
    setLevel(level + 1);
    setHeading("Level " + level);
    setTimeout(() => {
      var selectNumer = RandomBlink(colors);
      gameSelectedList.push(colors[selectNumer]);
    }, 1000);

    userSelectedList = [];
  };
  const restartGame = (e) => {
    if (e.key === "a") {
      gameSelectedList = [];
      userSelectedList = [];
      var selectNumer = RandomBlink(colors);
      gameSelectedList.push(colors[selectNumer]);
      setLevel(1);
      setHeading("Level " + level);
      document.body.style.backgroundColor = "#011F3F";
    }
  };
  const checkAnswer = (list_1, list_2, index) => {
    if (list_1[index - 1] === list_2[index - 1]) {
      if (list_1.length === list_2.length) {
        continueGame();
      }
      return true;
    } else {
      document.body.style.backgroundColor = "#900d0d";
      setLevel(1);
      setHeading("Game Over Press 'A' Key to continue");

      return false;
    }
  };
  return (
    <div className='App'>
      <h1 id='level-title'>{heading}</h1>
      <div className='container'>
        <div className='row'>
          <Box id='green' className='btn green' />
          <Box id='red' className='btn red' />
        </div>
        <div className='row'>
          <Box id='yellow' className='btn yellow' />
          <Box id='blue' className='btn blue' />
        </div>
      </div>
    </div>
  );
}

export default App;
