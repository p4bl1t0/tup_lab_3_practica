import { useState } from "react";
import LogicGates from "./LogicGates";
import CheckBox from "./CheckBox";
import Input1 from "./Input1";

import "./App.css";

function App() {
  
  const [inputValue, setInputValue] = useState(Math.round(Math.random()));
  const [checkBox, setCheckBox] = useState(0);
  const [gateValue, setGateValue] = useState(null);

  return (
    <div className="App">
      <Input1 inputValue={inputValue} setInputValue={setInputValue} />
      <CheckBox checkBox={checkBox} setCheckBox={setCheckBox} />
      <LogicGates
        value1={inputValue}
        value2={checkBox}
        setGateValue={setGateValue}
      />
      <span>Salida: {gateValue}</span>
    </div>
  );
}

export default App;
