import "./App.css";
import { useState } from "react";
import LogicGates from "./components/LogicGates";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";

function App() {
  const randomNumber = () => Math.round(Math.random());
  const [input1, setInput1] = useState(randomNumber());

  const [select, setSelect] = useState(0);
  const [select2, setSelect2] = useState(0);
  const [select3, setSelect3] = useState(0);

  const [checkbox, setCheckbox] = useState(0);

  const [range, setRange] = useState(0);
  const [radio, setRadio] = useState(0);

  const handleRange = (e) => {
    setRange(e.target.value);
    if (Number(e.target.value) >= 50) {
      setRange(1);
    } else {
      setRange(0);
    }
  };

  return (
    <div className="App">
      <Input input1={input1} setInput1={setInput1} />
      <Checkbox checkbox={checkbox} setCheckbox={setCheckbox} />
      <LogicGates
        input1={input1}
        checkbox={checkbox}
        select={select}
        setSelect={setSelect}
      />
      <div>
        <span>Salida: {select}</span>
      </div>

      <hr />

      <div>
        <input type="range" onChange={(e) => handleRange(e)} />
        <br />
        <label>0</label>
        <input type="radio" name="all" onClick={() => setRadio(0)} />
        <br />
        <label>1</label>
        <input type="radio" name="all" onClick={() => setRadio(1)} />
      </div>
      <LogicGates
        input1={radio}
        checkbox={range}
        select={select2}
        setSelect={setSelect2}
      />
      <div>
        <span>Salida: {select2}</span>
      </div>

      <hr />
      <LogicGates
        input1={select}
        checkbox={select2}
        select={select3}
        setSelect={setSelect3}
      />
      <div>
        <span>Salida: {select3}</span>
      </div>
    </div>
  );
}

export default App;
