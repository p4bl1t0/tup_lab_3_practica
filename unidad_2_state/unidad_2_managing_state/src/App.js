import "./App.css";

import { useState } from "react";

import LogicGate from "./LogicGates";
import Input1 from "./Input1";
import CheckBox1 from "./Checkbox";

function App() {
  const [input1, setInput1] = useState(Math.round(Math.random()));

  const [checkBox, setCheckBox] = useState(0);

  const [outPutValue1, setOutPutValue1] = useState(0);

  const [outPutValue2, setOutPutValue2] = useState(0);

  const [rangeInput, setRangeValue] = useState(0);
  const changeRangeValue = (event) => {
    console.log(event.target.value);
    setRangeValue(event.target.value);
  };

  const [radioInput, setRadioInput] = useState("");
  const changeRadioValue = (event) => {
    console.log(event.target.value);
    radioInput === 0 ? setRadioInput(0) : setRadioInput(1);
  };

  const [outPutValue3, setOutPutValue3] = useState(0);

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
          <LogicGate
            input1={input1}
            input2={checkBox}
            outPutValue={outPutValue1}
            setOutPutValue={setOutPutValue1}
          />
          <div>
            <span>Salida: {outPutValue1}</span>
          </div>
        </div>
      </div>
      <div className="calculate2">
        <label>Entrada 3:</label>
        <input
          type="range"
          min="0"
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
        <LogicGate
          input1={radioInput}
          input2={radioInput}
          outPutValue={outPutValue2}
          setOutPutValue={setOutPutValue2}
        />
        <div>
          <span>Salida: {outPutValue2}</span>
        </div>
      </div>
      <div className="calculate3">
        <LogicGate
          input1={outPutValue1}
          input2={outPutValue2}
          outPutValue={outPutValue2}
          setOutPutValue={setOutPutValue3}
        />
        <div>
          <span>Salida: {outPutValue3}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
