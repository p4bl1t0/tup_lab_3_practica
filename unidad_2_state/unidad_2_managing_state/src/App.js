import { useState } from "react";
import "./App.css";
import LogicGates from "./components/LogicGates";
import Input from "./components/Input";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [radioValue, setRadioValue] = useState(0);
  const [gateOutputOne, setGateOutputOne] = useState(false);
  const [gateOutputTwo, setGateOutputTwo] = useState(false);
  const [gateOutputthree, setGateOutputthree] = useState(false);
  return (
    <div className="App">
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
          inputOne={inputValue}
          inputTwo={checkboxValue}
          onChange={setGateOutputOne}
        />
      </div>
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
          inputOne={rangeValue}
          inputTwo={radioValue}
          onChange={setGateOutputTwo}
        />
      </div>
    </div>
  );
}

export default App;
