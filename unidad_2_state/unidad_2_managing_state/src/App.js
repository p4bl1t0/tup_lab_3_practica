import "./App.css";
import { useState } from "react";

function App() {
  const randomNumber = () => Math.round(Math.random());
  const [inputValue, setInputValue] = useState(randomNumber());
  const validate = (number) => {
    if (number > 1 || number < 0) {
      return 0;
    }
    return number;
  };

  const [cbxInput, setCbxInput] = useState(false);
  const handleChange = () => {
    setCbxInput(!cbxInput);
  };

  const [selectValue, setSelectValue] = useState("OR");
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const logic = (opt1, opt2, door) => {
    opt1 = opt1 === "1";

    switch (door) {
      case "OR":
        if (opt1 || opt2) {
          return "true";
        }
        return "false";
      case "AND":
        if (opt1 && opt2) {
          return "true";
        }
        return "false";
      case "NAND":
        if (opt1 && opt2) {
          return "false";
        }
        return "true";
      case "NOR":
        if (opt1 || opt2) {
          return "false";
        }
        return "true";
      case "XOR":
        if (opt1 === opt2) {
          return "false";
        }
        return "true";
      case "XNOR":
        if (opt1 === opt2) {
          return "true";
        }
        return "false";
      default:
        return 2;
    }
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
      <div>
        <label for="selectGate">Compuerta lógica:</label>
        <select
          id="selectGate"
          value={selectValue}
          onChange={handleSelectChange}
        >
          <option value="OR">OR</option>
          <option value="AND">AND</option>
          <option value="NAND">NAND</option>
          <option value="NOR">NOR</option>
          <option value="XOR">XOR</option>
          <option value="XNOR">XNOR</option>
        </select>
      </div>
      <div>
        <span>Salida: {logic(inputValue, cbxInput, selectValue)}</span>
      </div>
    </div>
  );
}

export default App;
