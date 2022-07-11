import { useState } from "react";
import "./App.css";
import LogicGates from "./components/LogicGates";
import Input from "./components/Input";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [radioValue, setRadioValue] = useState(0);
  return (
    <div className="App">
      <h1>Aplicación de Compuertas Lógicas</h1>
      <h4>Ingrese los valores deseados y aplique una compuerta en cada sección para obtener el resultado de la compuerta lógica.</h4>
      <div className="section section-one">
        <h2>Puerta lógica 1</h2>
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
        />
      </div>
      <div className="section section-two">
        <h2>Puerta lógica 2</h2>
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
        />
      </div>
    </div>
  );
}

export default App;
