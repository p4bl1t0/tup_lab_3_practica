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
  const [result2, setResult2] = useState(0);
  const [range, setRange] = useState(0);
  const [radio, setRadio] = useState(0);
  const handleRange = e => {
    setRange(e.target.value);
    if (Number(e.target.value) >= 50) {
      setRange(1);
    } else {
      setRange(0);
    }
  };
  const handleRadio = e => {
    radio === 0 ? setRadio(1) : setRadio(0);
  };
  return (
    <div className="App">
      <h2>Compuerta 1</h2>
      <Input1 inputOne={inputOne} setInputOne={setInputOne} />
      <Checkbox checked1={checked1} setChecked1={setChecked1} />
      <LogicGates
        input1={inputOne}
        checked1={checked1}
        result={result}
        setResult={setResult}
      />
      <div>
        <span> Salida 1: {result}</span>
      </div>

      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />

      <div>
        <h2>Compuerta 2</h2>
        <input type="range" onChange={e => handleRange(e)} />
        <input type="radio" name="radios" onClick={() => setRadio(0)} />
        <input type="radio" name="radios" onClick={() => setRadio(1)} />
      </div>
      <LogicGates
        input1={radio}
        checked1={range}
        result={result2}
        setResult={setResult2}
      />
      <div>
        <span> Salida 2: {result2}</span>
      </div>
    </div>
  );
}

export default App;
