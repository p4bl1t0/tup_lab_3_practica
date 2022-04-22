import { useState } from "react";

import "./App.css";

import InputComponent from "./components/InputComponent";
import LogicGates from "./components/LogicGates";

const App = () => {
  const [newInput, setNewInput] = useState(0);
  const [checkboxInput, setCheckboxInput] = useState(0);

  const [rangeInput, setRangeInput] = useState(0);
  const [radioInput, setRadioInput] = useState(0);

  return (
    <div className="App">
      <div className="cmp-box">
        <p>Caja 1</p>
        <InputComponent
          inputName="Entrada 1:"
          inputId="number"
          inputType="number"
          input={newInput}
          setInput={setNewInput}
        />
        <InputComponent
          inputName="Entrada 2"
          inputId="checkbox"
          inputType="checkbox"
          input={checkboxInput}
          setInput={setCheckboxInput}
        />
        <LogicGates inputA={newInput} inputB={checkboxInput} />
      </div>
      <div className="cmp-box">
        <p>Caja 2</p>
        <InputComponent
          inputName="InputRange"
          inputId="range"
          inputType="range"
          input={rangeInput}
          setInput={setRangeInput}
        />
        <InputComponent
          inputName="1"
          inputId="radio1"
          inputType="radio"
          input={radioInput}
          setInput={setRadioInput}
        />
        <InputComponent
          inputName="0"
          inputId="radio1"
          inputType="radio"
          input={radioInput}
          setInput={setRadioInput}
        />
        <LogicGates inputA={rangeInput} inputB={radioInput} />
      </div>
    </div>
  );
};

export default App;
