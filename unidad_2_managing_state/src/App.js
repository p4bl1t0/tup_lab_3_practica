import { useState } from "react";
import "./App.css";
import LogicGates from "./components/LogicGates.js";

const App = () => {
  const [input1Value, setInput1Value] = useState(Math.round(Math.random()));
  const [checkboxInput, setCheckboxInput] = useState(0);

  const inputHandler = (e) => {
    setInput1Value(e.target.value === '1' ? 1 : 0);
  };

  const checkboxHandler = (e) => {
    setCheckboxInput(e.target.checked ? 1 : 0);
  };

  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1:</label>
        <input
          value={input1Value}
          type="number"
          id="input1"
          min="0"
          max="1"
          onChange={inputHandler}
        />
      </div>
      <div>
        <label>
          <input type="checkbox" onChange={checkboxHandler} /> Entrada 2
        </label>
      </div>
      <div>
        <LogicGates newInput={input1Value} checkboxInput={checkboxInput} />
      </div>
    </div>
  );
}

export default App;
