import { useState } from "react";
import "./App.css";
// Completar los valores posibles del `select` para elegir algunas de las compuertas lógicas (or, and, nand, nor y xor). Ver: https://en.wikipedia.org/wiki/Logic_gate
function App() {
  const [input1, setInput1] = useState(0);
  const [checked, setChecked] = useState(0);
  const handleChangeInput = (e) => {
    Number(e.target.value) === 1
      ? setInput1(Number(e.target.value))
      : setInput1(0);
  };
  const handleChangeCheckbox = () => {
    checked ? setChecked(0) : setChecked(1);
  };
  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1:</label>
        <input
          type="number"
          id="input1"
          onChange={handleChangeInput}
          value={input1}
        />
      </div>
      <div>
        <label>
          <input type="checkbox" onChange={handleChangeCheckbox} /> Entrada 2
        </label>
      </div>
      <div>
        <label for="selectGate">Compuerta lógica:</label>
        <select id="selectGate">
          <option value="seleccione una opcion" selected disabled>
            and
          </option>
          <option value="and">and</option>
          <option value="or">or</option>
          <option value="nor">nor</option>
          <option value="nand">nand</option>
          <option value="xor">xor</option>
        </select>
      </div>
      <div>
        <span>Salida: {/* aca iria el resultado*/}</span>
      </div>
    </div>
  );
}

export default App;
