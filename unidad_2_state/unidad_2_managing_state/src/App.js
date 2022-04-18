import { useState } from "react";
import "./App.css";
//import LogicDoor from "./components/LogicDoor";

const App = () => {
  const randomNum = () => Math.round(Math.random());
  const [inputValue, setInputValue] = useState(randomNum());

  const changeInputValue = (event) => {
    setInputValue(event.target.value === "1" ? 1 : 0);
  };
  //console.log(inputValue);

  const [checked, setChecked] = useState(false);

  const handleCheckBox = () => {
    //let checkBoxValue;
    setChecked(!checked);
  };
  const [selectInput, setSelectInput] = useState("or");

  const handleSelect = (e) => {
    setSelectInput(e.target.value);
  };

  const [output, setOutput] = useState("");

  const handleOutput = () => {
    switch (selectInput) {
      case "or":
        // eslint-disable-next-line eqeqeq
        setOutput((inputValue || checked) == 1 ? "TRUE" : "FALSE");
        break;
      case "and":
        // eslint-disable-next-line eqeqeq
        setOutput((inputValue && checked) == 1 ? "TRUE" : "FALSE");
        break;
      case "nand":
        // eslint-disable-next-line eqeqeq
        setOutput((!inputValue || !checked) == 1 ? "TRUE" : "FALSE");
        break;
      case "xor":
        // eslint-disable-next-line eqeqeq
        setOutput((!inputValue != !checked) == 1 ? "TRUE" : "FALSE");
        break;
      case "nor":
        // eslint-disable-next-line eqeqeq
        setOutput(!(inputValue || checked) == 1 ? "TRUE" : "FALSE");
        break;
      default:
        return "something went wrong";
    }
  };
  return (
    <div className="App">
      <div>
        <label htmlFor="input1">Entrada 1:</label>
        <input
          type="number"
          id="input1"
          value={inputValue}
          onChange={(e) => changeInputValue(e)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="1"
            checked={checked}
            onChange={(e) => handleCheckBox(e)}
          />{" "}
          Entrada 2
        </label>
      </div>
      <div>
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
        <button onClick={handleOutput}>Calcular</button>
        <br></br>
        <span>Salida: {output}</span>
      </div>
    </div>
  );
};

export default App;
