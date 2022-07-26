import { useState } from "react";
import LogicGates from "./components/LogicGates";
import CheckBox from "./components/CheckBox";
import Input1 from "./components/Input1";

import "./App.css";

function App() {

  const [inputValue, setInputValue] = useState(Math.round(Math.random()));
  const [checkBox, setCheckBox] = useState(0);
  const [range, setRange] = useState(1);
  const [radio, setRadio] = useState(0);

  const radioHandler = (event) => {
    setRadio(parseInt(event.target.value));
  };

  const rangeHandler = (event) => {
    setRange(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <div>
        <Input1 inputValue={inputValue} setInputValue={setInputValue} />
        <CheckBox checkBox={checkBox} setCheckBox={setCheckBox} />
        <LogicGates value1={inputValue} value2={checkBox} />
      </div>
      <h1>
        ---------------------------------------------------------------------
      </h1>
      <div>
        <label>
          Entrada 3:
          <br />
          <input type="range" step={1} min="0" max="1" onChange={rangeHandler} />
        </label>
        <br />
        <form onChange={radioHandler}>
          <label>
            Entrada 4:
            <br />
            <label>
              0<input type="radio" name="binary" value={0} />
            </label>
            <label>
              - 1<input type="radio" name="binary" value={1} />
            </label>
          </label>
        </form>
        <LogicGates value1={range} value2={radio} />
      </div>
    </div>
  );
}

export default App;
