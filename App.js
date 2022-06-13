import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import Basket from "./components/Basket";

function App() {

  let height = 5;
  let width = 5;
  let boxes = [...Array(height * width).keys()]

  const [boxArray, setBoxes] = useState(boxes);

  useEffect(() => {
    console.log('hello');
  }, [boxArray])

  return (
    <div className='appContainer'>
      <Basket boxArray={boxArray} setBoxes={setBoxes} />
      <Board boxArray={boxArray} setBoxes={setBoxes} />
    </div>
  );
}

export default App;
