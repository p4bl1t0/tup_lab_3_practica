import "./App.css";
import { useState } from "react";
import { validate, randomNumber } from "./lib/functions";
import Logic from "./Logic";

function App() {
  const [inputValue, setInputValue] = useState(randomNumber());

  const [cbxInput, setCbxInput] = useState(false);
  const handleChange = () => {
    setCbxInput(!cbxInput);
  };

  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1: </label>
        <input
          type="number"
          id="input1"
          value={inputValue}
          onChange={(e) => setInputValue(validate(e.target.value))}
        />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={cbxInput} onChange={handleChange} />{" "}
          Entrada 2{/* {cbxInput ? "1" : "0"} */}
        </label>
      </div>
      <Logic value1={inputValue} value2={cbxInput} />
    </div>
  );
}

export default App;
