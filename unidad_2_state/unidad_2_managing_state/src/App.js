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

import SelectGate from "./components/SelectGate";

function App() {
  const [inputValue, setInputValue] = useState("1");
  const [checkBoxValue, setCheckBoxValue] = useState(0);
  
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

  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1:</label>
        <input
          type="number"
          id="input1"
          value={inputValue}
          onChange={inputHandler}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={checkboxHandler}
            checked={checkBoxValue}
          />
          Entrada 2
        </label>
      </div>
      <SelectGate
        inputValue={inputValue}
        checkBoxValue={checkBoxValue}
      />

    </div>
  );
}

export default App;
