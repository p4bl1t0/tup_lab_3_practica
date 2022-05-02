import "./App.css";

import { useState } from "react";

import LogicGate from "./LogicGate";
import Input1 from "./Input1";
import CheckBox1 from "./CheckBox";

function App() {
  const [input1, setInput1] = useState(Math.round(Math.random())); //seteo el valor aleatoriamente entre 1 y 0

  const [checkBox, setCheckBox] = useState(0);

  const [rangeInput, setRangeValue] = useState(0);
  const changeRangeValue = (event) => {
    console.log(event.target.value);
    setRangeValue(event.target.value);
  };

  const [radioInput, setRadioInput] = useState(0);
  const changeRadioValue = (event) => {
    console.log(event.target.value);
    radioInput === 0 ? setRadioInput(0) : setRadioInput(1);
  };

  return (
    <div className="App">
      <div className="calculate1">
        <div>
          <Input1 input1={input1} setInput1={setInput1} />
        </div>
        <div>
          <CheckBox1 checkBox1={checkBox} setCheckBox1={setCheckBox} />
        </div>
        <div>
          <LogicGate input1={input1} input2={checkBox} />
        </div>
      </div>
      <div className="calculate2">
        <label>Entrada 3:</label>
        <input
          type="range"
          max="1"
          step="1"
          value={rangeInput}
          onChange={changeRangeValue}
        />
        <br></br>
        <label>Entrada 4: </label>
        <input
          type="radio"
          value={radioInput}
          onChange={changeRadioValue}
        />{" "}
        <LogicGate input1={radioInput} input2={radioInput} />
      </div>
      <div className="calculate3">
        <LogicGate />
      </div>
    </div>
  );
}

export default App;
