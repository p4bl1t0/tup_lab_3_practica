import "./App.css";

import { useState } from "react";

function App() {
  const [newInput1, setNewInput1] = useState(Math.round(Math.random()));
  const [checked1, setChecked1] = useState("");
  const [result, setResult] = useState("");

  const changeInput = (event) => {
    setNewInput1(event.target.value === "1" ? 1 : 0);
  };

  const ChangeCheckbox = () => {
    setChecked1(checked1 === 1 ? 0 : 1);
  };

  const changeSelectGate = (event) => {
    switch (event.target.value) {
      case "OR":
        setResult(newInput1 || checked1 ? 1 : 0);
        break;
      case "AND":
        setResult(newInput1 && checked1 ? 1 : 0);
        break;
      case "NOR":
        setResult(newInput1 || checked1 ? 0 : 1);
        break;
      case "NAND":
        setResult(newInput1 && checked1 ? 0 : 1);
        break;
      case "XOR":
        setResult(newInput1 !== checked1 ? 1 : 0);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1:</label>
        <input
          type="number"
          id="input1"
          value={newInput1}
          onChange={changeInput}
        />
      </div>
      <div>
        <label>
          <input type="checkbox" onChange={ChangeCheckbox} /> Entrada 2
        </label>
      </div>
      <div>
        <label for="selectGate">Compuerta lógica:</label>
        <select id="selectGate" onChange={changeSelectGate}>
          <option>OR</option>
          <option>AND</option>
          <option>NAND</option>
          <option>NOR</option>
          <option>XOR</option>
        </select>
      </div>
      <div>
        <span>Salida: {result}</span>
      </div>
    </div>
  );
}

export default App;
