import './App.css';
import { useState } from 'react';

function App() {

  const numeroAleatorio = () => Math.round(Math.random());
  const [input1, setInput1] = useState(numeroAleatorio());
  const [checkbox, setCheckbox] = useState(0);
  const [select, setSelect] = useState(0);

  const handleInput = (event) => {
    Number(event.target.value) === 1
      ? setInput1(Number(event.target.value))
      : setInput1(0);
  };

  const handleCheckbox = () => {
    checkbox ? setCheckbox(0) : setCheckbox(1);
  };

  const handleSelect = (event) => {
    switch (event.target.value) {
      case "and":
        return input1 && checkbox ? setSelect(1) : setSelect(0);
      case "nand":
        return !input1 && !checkbox ? setSelect(1) : setSelect(0);
      case "or":
        return input1 || checkbox ? setSelect(1) : setSelect(0);
      case "nor":
        return !input1 || !checkbox ? setSelect(1) : setSelect(0);
      case "xor":
        return input1 ^ checkbox ? setSelect(1) : setSelect(0);
      default:
        return "Vuelva a ingresar";
    }
  }  


  return (
    <div className="App">
      <div>
      <div>
      <label htmlFor="input1">Entrada 1:</label>
      <input type="number" value={input1} id="input1" onChange={handleInput} />
    </div>
      </div>
      <div>
      <label><input type="checkbox" onChange={handleCheckbox} />
        Entrada 2
      </label>
      </div>

      <div>
      <label htmlFor="selectGate">Compuerta lógica:</label>
      <select id="selectGate" onChange={handleSelect} defaultValue={"DEFAULT"}>
        <option value={"DEFAULT"} disabled>
          Seleccion opcion
        </option>
        <option value="and">And x</option>
        <option value="nand">Nand</option>
        <option value="or">Or +</option>
        <option value="nor">Nor</option>
        <option value="xor">Xor</option>
      </select>
    </div>
        <div><span>Salida: { /* aca iria el resultado*/ }</span></div>
    </div>
  );
}

export default App;
