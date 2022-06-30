/*
### Tarea 1
- Crear un state para el valor del `input1` definirle un valor inicial random (1 o 0).
- Permitir que el usuario pueda cambiarle el valor a `input1` definiendo 1 o 0. Si el usuario cargase otra cosa setear el valor 0.


### Tarea 2
- Capturar el valor del `checkbox` en un estado de React si el input está seleccionado guardar 1 sino guardar 0.
- Completar los valores posibles del `select` para elegir algunas de las compuertas lógicas (or, and, nand, nor y xor). Ver: https://en.wikipedia.org/wiki/Logic_gate


### Tarea 3
- Capturar el evento de cambio del contenido del `select` y mostrar el resultado de aplicar la puerta lógica seleccionada al valor del estado de `input1` y el de `checkboc` de  en el espacio reservado para tar fin
- Bonus: Refactorizar la selección y el cálculo de la compuerta lógica como un componente.
*/
import "./App.css";

import { useState } from "react";

import LogicGates from "./components/LogicGates";
import Input from "./components/Input1";
import Checkbox from "./components/Checkbox";

function App() {
  const [inputValue, setInputValue] = useState("1");
  const [checkBoxValue, setCheckBoxValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [radioValue, setRadioValue] = useState(0);

  const inputHandler = (elem) => {
    const intValue = parseInt(elem.target.value);
    if (intValue < 0 || intValue > 1) {
      setInputValue(0);
    } else {
      setInputValue(1);
    }
  };

  const checkboxHandler = (elem) => {
    if (elem.target.checked) {
      setCheckBoxValue(1);
    } else {
      setCheckBoxValue(0);
    }
  };

  const RangeHandler = (e) => {
    setRangeValue(e.target.value);
    if (Number(e.target.value) >= 50) {
      setRangeValue(1);
    } else {
      setRangeValue(0);
    }
  };

  return (
    <div className="App">
      <h2>Compuerta 1</h2>
      <Input inputHandler={inputHandler} inputValue={inputValue} />
      <Checkbox
        checkboxHandler={checkboxHandler}
        checkBoxValue={checkBoxValue}
      />
      <LogicGates
        className="gate1"
        value1={inputValue}
        value2={checkBoxValue}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h2>Compuerta 2</h2>
        <input type="range" onChange={(e) => RangeHandler(e)} />
        <input type="radio" name="radios" onClick={() => setRadioValue(0)} />
        <input type="radio" name="radios" onClick={() => setRadioValue(1)} />
      </div>
      <LogicGates id="gate2" value1={rangeValue} value2={radioValue} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h2>Compuerta 3</h2>
        <p>
          No supe como hacer esta compuerta, sería la que toma los resultados de
          las 2 anteriores y las somete a una nueva compuerta lógica
        </p>
      </div>
    </div>
  );
}

export default App;
