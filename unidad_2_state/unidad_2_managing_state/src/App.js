import { useState } from "react";

import "./App.css";

import LogicGates from "./components/LogicGates";
import TextInput from "./components/TextInput";
import CheckInput from "./components/CheckInput";

function App() {
  const [newInput1, setNewInput1] = useState(Math.round(Math.random()));
  const [checked1, setChecked1] = useState(0);
  const [rangeInput, setRanegeInput] = useState(0);
  const [radioValue, setRadioValue] = useState(0);
  const [logicOne, setLogicOne] = useState(0);
  const [logicTwo, setLogicTwo] = useState(0);

  const changeInput = (value) => {
    setNewInput1(value);
  };

  const ChangeCheckbox = (value) => {
    setChecked1(value);
  };

  return (
    <div className="App">
      <TextInput label="Entrada 1:" onChange={changeInput} />
      <CheckInput label="Entrada 2:" onChange={ChangeCheckbox} />
      <div>
        <LogicGates
          newInput={newInput1}
          checked_={checked1}
          onChange={(valor) => {
            setLogicOne(valor);
          }}
        />
      </div>
      <hr />
      <div>
        <label>Entrada 3: </label>
        <input
          type="range"
          min="0"
          max="1"
          value={rangeInput}
          onChange={(event) => {
            setRanegeInput(parseInt(event.target.value, 10));
          }}
        />
      </div>
      <div>Entrada 4: </div>
      <div>
        <label>
          <input name="entrada 4" type="radio" value={radioValue} onChange={(event) => {
            setRadioValue(event.target.value ? 1 : 0);
          }}/> 0
        </label>
        <label>
          <input name="entrada 4" type="radio" value={radioValue} onChange={(event) => {
            setRadioValue(event.target.value ? 1 : 0);
          }}/> 1
        </label>
      </div>
      <div>
        <LogicGates
          newInput={rangeInput}
          checked_={radioValue}
          onChange={(valor) => {
            setLogicTwo(valor);
          }}
        />
      </div>
      <hr />
      <div>
        valor compuertas: {logicOne} - {logicTwo}
      </div>
      <LogicGates newInput={logicOne} checked_={logicTwo} />
      
    </div>
  );
}

export default App;
