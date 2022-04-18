import "./App.css";

import LogicGates from "./components/LogicGates";
import { useState } from "react";

function App() {
  const [newInput, setNewInput] = useState(0);
  const [checkboxInput, setCheckboxInput] = useState(0);

  const inputHandler = (e) => {
    let inputValue = e.target.value;
    if (inputValue <= 1 && inputValue >= 0) {
      setNewInput(inputValue);
    } else setNewInput(0);
  };

  const checkboxHandler = (e) => {
    if (e.target.checked) {
      setCheckboxInput(1);
    } else setCheckboxInput(0);
  };

  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1:</label>
        <input
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
        <LogicGates newInput={newInput} checkboxInput={checkboxInput} />
      </div>
    </div>
  );
}

export default App;
