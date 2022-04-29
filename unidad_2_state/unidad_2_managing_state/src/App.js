import "./App.css";

import { useState } from "react";

function App() {
  const App = () => {
    const ranNum = () => Math.round(Math.random());
    input[(inputValue, setInputValue)] = useState(ranNum());

    const changeInputValue = (event) => {
      setInputValue(event.target.value === "1" ? 1 : 0);
    };

    const [checked, setChecked] = useState(false);

    const handleCheckBox = () => {
      setChecked(!checked);
    };

    const [selectInput, setSelectInput] = useState("or");

    const handleSelect = (event) => {
      setSelectInput(event.target.value);
    };

    const [output, setOutput] = useState("");

    const handleOutput = () => {
      switch (selectInput) {
        case "or":
          setOutput((inputValue || checked) == 1 ? "TRUE" : "FALSE");
          break;
        case "and":
          setOutput((inputValue && checked) == 1 ? "TRUE" : "FALSE");
          break;
        case "nand":
          setOutput((!inputValue || !checked) == 1 ? "TRUE" : "FALSE");
          break;
        case "xor":
          setOutput((!inputValue != !checked) == 1 ? "TRUE" : "FALSE");
          break;
        default:
          return "error";
      }
    };

    return (
      <div className="App">
        <div>
          <label for="input1">Entrada 1:</label>
          <input type="number" id="input1" />
          <label htmlFor="input1">Entrada 1:</label>
          <input
            type="number"
            id="input1"
            value={inputValue}
            onChange={(event) => changeInputValue(event)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="1"
              checked={checked}
              onChange={(event) => handleCheckBox(event)}
            />{" "}
            Entrada 2
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Entrada 2
          </label>
          <label htmlFor="selectGate">Compuerta lógica:</label>
          <select id="selectGate" onChange={handleSelect}>
            <option value="or">OR</option>
            <option value="and">AND</option>
            <option value="nand">NAND</option>
            <option value="nor">NOR</option>
            <option value="xor">XOR</option>
          </select>
        </div>

        <div>
          <label for="selectGate">Compuerta lógica:</label>
          <select id="selectGate"></select>

          <div>
            <button onClick={handleOutput}>Calcular</button>
            <br></br>
            <span>Salida: {output}</span>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
