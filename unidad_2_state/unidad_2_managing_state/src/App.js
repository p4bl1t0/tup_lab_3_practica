import {useState} from 'react';

import './App.css';

function App() {

  const [inputValue, setInputValue] = useState(Math.round(Math.random()));

  const changeInput = (event) => {
    setInputValue( parseInt(event.target.value) === 1? 1 : 0);
  };

  const [checkBox, setCheckBox] = useState("");

  const changeCheckBox = () => {
  setCheckBox(checkBox === 1? 0 : 1);
  };

  const[gateValue, setGateValue] = useState("");

  const changeSelectGate = (event) => {
    switch (event.target.value) {
      case "OR":
        setGateValue(inputValue||checkBox? 1: 0); 
        break;
      case "AND":
        setGateValue(inputValue&&checkBox? 1: 0);
        break;
      case "NOR":
        setGateValue(inputValue||checkBox? 0: 1);
        break;
      case "NAND":
        setGateValue(inputValue&&checkBox? 0: 1);
        break;
      case "XOR":
        setGateValue(inputValue!==checkBox? 1: 0);
        break;
      default:
        break;
    };
  };

  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1:</label>
        <input type="number" id="input1" value = {inputValue} onChange={changeInput}/>
      </div>
      <div>
        <label><input type="checkbox"  onClick={changeCheckBox}/> Entrada 2</label>
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
        <div><span>Salida: { gateValue }</span></div>
    </div>
  );
};

export default App;
