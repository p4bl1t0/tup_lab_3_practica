import "./App.css";
import { useState } from "react";
import "./App.css";
import LogicGates from "./components/LogicGates";
import Input from "./components/Input";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [radioValue, setRadioValue] = useState(0);
  const [gateOutput1, setGateOutput1] = useState(false);
  const [gateOutput2, setGateOutput2] = useState(false);

  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1:</label>
        <input type="number" id="input1" />
        <div className="section-one">
          <Input
            type="number"
            value={inputValue}
            onChange={setInputValue}
            id="input1"
            text="Entrada 1"
          />
          <Input
            type="checkbox"
            value={checkboxValue}
            onChange={setCheckboxValue}
            id="checkbox1"
            text="Entrada 2"
          />
          <LogicGates
            input1={inputValue}
            input2={checkboxValue}
            value={gateOutput1}
            onChange={setGateOutput1}
          />
        </div>
        <div>
          <label>
            <input type="checkbox" /> Entrada 2
          </label>
          <div className="section-two">
            <Input
              type="range"
              value={rangeValue}
              onChange={setRangeValue}
              id="range1"
              text="Entrada 1"
            />
            <Input
              type="radio"
              value={radioValue}
              onChange={setRadioValue}
              id="radio1"
              text="Entrada 2"
            />
            <LogicGates
              input1={rangeValue}
              input2={radioValue}
              value={gateOutput2}
              onChange={setGateOutput2}
            />
          </div>
          <div>
            <label for="selectGate">Compuerta lógica:</label>
            <select id="selectGate"></select>
          </div>
          <div>
            <span>Salida: {/* aca iria el resultado*/}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
