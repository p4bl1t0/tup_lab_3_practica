import "./App.css";
import { useState } from "react";
import { validate, randomNumber } from "./lib/functions";
import LogicGates from "./LogicGates";
import LogicInput from "./LogicInput";

function App() {
  const [inputValue, setInputValue] = useState(randomNumber());

  const inputHandler = (value) => {
    setInputValue(value === "1" ? 1 : 0);
  };

  const [cbxInput, setCbxInput] = useState(false);
  const handleChange = () => {
    setCbxInput(!cbxInput);
  };

  return (
    <div className="App">
      <div>
        <LogicInput label="Entrada 1:" onChange={inputHandler} />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={cbxInput} onChange={handleChange} />{" "}
          Entrada 2
        </label>
      </div>
      <LogicGates value1={inputValue} value2={cbxInput} />
    </div>
  );
}

export default App;
