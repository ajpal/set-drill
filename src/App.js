import React, { useState } from "react";
import allSets from "./allSets.png";
import "./App.css";

const HEIGHT = 58;
const WIDTH = 102;

const NUM_ROWS = 9;
const NUM_COLS = 9;

function App() {
  const [row1, setRow1] = useState(0);
  const [col1, setCol1] = useState(0);
  const [row2, setRow2] = useState(0);
  const [col2, setCol2] = useState(0);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function randomize() {
    setRow1(getRandomInt(0, NUM_ROWS));
    setCol1(getRandomInt(0, NUM_COLS));
    setRow2(getRandomInt(0, NUM_ROWS));
    setCol2(getRandomInt(0, NUM_COLS));
  }

  return (
    <div className="App">
      <img
        style={{
          width: WIDTH,
          height: HEIGHT,
          objectFit: "none",
          objectPosition: `${col1 * -WIDTH}px ${row1 * -HEIGHT}px`,
        }}
        src={allSets}
      />
      <img
        style={{
          width: WIDTH,
          height: HEIGHT,
          objectFit: "none",
          objectPosition: `${col2 * -WIDTH}px ${row2 * -HEIGHT}px`,
        }}
        src={allSets}
      />
      <br />
      <button onClick={randomize}>randomize</button>
    </div>
  );
}

export default App;
