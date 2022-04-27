import { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import Input1 from "./components/Input1";
import LogicGates from "./components/LogicGates";

function App() {
  const randomNumber = () => Math.round(Math.random());
  const [inputOne, setInputOne] = useState(randomNumber());
  const [checked1, setChecked1] = useState(0);
  const [result, setResult] = useState(0);
  const [range, setRange] = useState(0);
  const [radio, setRadio] = useState(0);
  const handleRange = (e) => {
    setRange(e.target.value);
  };
  const handleRadio = (e) => {
    radio === 0 ? setRadio(1) : setRadio(0);
  };
  return (
    <div className="App">
      <Input1 inputOne={inputOne} setInputOne={setInputOne} />
      <Checkbox checked1={checked1} setChecked1={setChecked1} />
      <LogicGates
        input1={inputOne}
        checked1={checked1}
        result={result}
        setResult={setResult}
      />
      <div>
        <span> Salida: {result}</span>
      </div>
      <div>
        <input type="range" value={range} onChange={handleRange} />
        <input
          type="radio"
          value={radio}
          name="radios"
          onChange={handleRadio}
        />
        <input type="radio" value={radio} name="radios" />
      </div>
    </div>
  );
}

export default App;
