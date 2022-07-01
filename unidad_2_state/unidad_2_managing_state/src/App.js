import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import LogicGates from "./LogicGates";
import Input1 from "./Input1";
import CheckBox from "./CheckBox";

function App() {
  const [input1Saved, setInput1SavedValue] = useState(0);
  const input1Handler = (input) => {
    setInput1SavedValue(input);
  };
  const [inputCheckSaved, setInputCheckSavedValue] = useState(0);
  const inputCheckHandler = (input) => {
    setInputCheckSavedValue(input);
  };
  const [inputRadioValue, setInputRadioValue] = useState(0);
  const inputRadioHandler = (e) => {
    setInputRadioValue(e.target.value);
  };
  const [inputRangeValue, setInputRangeValue] = useState(0);
  const inputRangeHandler = (e) => {
    setInputRangeValue(e.target.value);
  };
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);

  const result2Handler = (input) => {
    console.log("result2", input);
    setResult2(input);
  };
  const result1Handler = (input) => {
    console.log("result1", input);
    setResult1(input);
  };

  return (
    <div className="App">
      <div className="gate">
        <Input1 onInput1Saved={input1Handler} />
        <CheckBox onInputCheckSaved={inputCheckHandler} />
        <LogicGates
          input1={input1Saved}
          input2={inputCheckSaved}
          onSavedResult={result1Handler}
        />
      </div>
      <br></br>
      <div className="gate">
        <div>
          <label>Entrada 3: </label>
          <span className="input3">
            <label> 0 </label>
            <input
              type="radio"
              name="binary"
              value="0"
              onClick={inputRadioHandler}
            ></input>
          </span>
          <span className="input3">
            <label> 1 </label>
            <input
              type="radio"
              name="binary"
              value="1"
              onClick={inputRadioHandler}
            ></input>
          </span>
        </div>
        <span className="input4">
          <label>Entrada 4: </label>
          <input
            className="range"
            type="range"
            min="0"
            max="1"
            step="1"
            value={inputRangeValue}
            onChange={inputRangeHandler}
          ></input>
        </span>

        <LogicGates
          input1={Number(inputRadioValue)}
          input2={Number(inputRangeValue)}
          onSavedResult={result2Handler}
        />
      </div>
      <br></br>
      <div className="final-result-container gate">
        SALIDA FINAL
        <LogicGates input1={Number(result1)} input2={Number(result2)} />
      </div>
    </div>
  );
}

export default App;
