import React, { useState } from "react";
import allSets from "./allSets.png";
import "./App.css";

const HEIGHT = 58;
const WIDTH = 102;

const NUM_ROWS = 9;
const NUM_COLS = 9;

function App() {
  const [row1, setRow1] = useState(getRandomInt(0, NUM_ROWS));
  const [col1, setCol1] = useState(getRandomInt(0, NUM_COLS));
  const [row2, setRow2] = useState(getRandomInt(0, NUM_ROWS));
  const [col2, setCol2] = useState(getRandomInt(0, NUM_COLS));

  const [start, setStart] = useState(Date.now());
  const [total, setTotal] = useState(0);
  const [avg, setAvg] = useState(0);
  const [best, setBest] = useState(Infinity);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function formatTime(time) {
    return `${(time / 1000).toFixed(1)} seconds`;
  }

  function randomize() {
    const elapsedTime = Date.now() - start;
    setAvg((avg * total + elapsedTime) / (total + 1));
    setTotal(total + 1);
    if (elapsedTime < best) {
      setBest(elapsedTime);
    }

    setRow1(getRandomInt(0, NUM_ROWS));
    setCol1(getRandomInt(0, NUM_COLS));
    setRow2(getRandomInt(0, NUM_ROWS));
    setCol2(getRandomInt(0, NUM_COLS));

    setStart(Date.now());
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
      <div>{`Total: ${total}`}</div>
      <div>{`Average Time: ${formatTime(avg)}`}</div>
      <div>{`Best Time: ${formatTime(best)}`}</div>
    </div>
  );
}

export default App;
