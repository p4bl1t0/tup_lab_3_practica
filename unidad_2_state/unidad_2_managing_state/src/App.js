import "./App.css";
import { useState } from "react";
import Select from "./components/Select";

function App() {
  const randomNumber = () => Math.round(Math.random());
  const [input1, setInput1] = useState(randomNumber());
  const [select, setSelect] = useState(0);
  const handleInput = (event) => {
    if (Number(event.target.value) === 1) {
      setInput1(Number(event.target.value));
    } else {
      setInput1(0);
    }
  };

  const [checkbox, setCheckbox] = useState(0);
  const handleCheckbox = () => {
    if (checkbox === 1) {
      setCheckbox(0);
    } else {
      setCheckbox(1);
    }
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="input1">Entrada 1:</label>
        <input
          type="number"
          id="input1"
          value={input1}
          onChange={handleInput}
        />
      </div>
      <div>
        <label>
          <input type="checkbox" value={checkbox} onClick={handleCheckbox} />
          Entrada 2
        </label>
      </div>
      <Select input1={input1} checkbox={checkbox} setSelect={setSelect} />
      <div>
        <span>Salida: {select}</span>
      </div>
    </div>
  );
}

export default App;
