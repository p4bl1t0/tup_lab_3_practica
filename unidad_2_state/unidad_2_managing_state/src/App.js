import "./App.css";

import { useState } from "react";

import LogicGate from "./components/LogicGate";

function App() {
  const [inputValue, setInputValue] = useState("1");
  const [checkBoxValue, setCheckBoxValue] = useState(0);
  
  const inputHandler = (elem) => {
    const intValue = parseInt(elem.target.value);
    if (intValue < 0 || intValue > 1) {
      setInputValue(0);
    } else {
      setInputValue(1);
    }
  };

  const checkboxHandler = (elem) => {
    if (elem.target.checked) {
      setCheckBoxValue(1);
    } else {
      setCheckBoxValue(0);
    }
  };

  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1:</label>
        <input
          type="number"
          id="input1"
          value={inputValue}
          onChange={inputHandler}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={checkboxHandler}
            checked={checkBoxValue}
          />
          Entrada 2
        </label>
      </div>
      <LogicGate
        inputValue={inputValue}
        checkBoxValue={checkBoxValue}
      />

    </div>
  );
}

export default App;