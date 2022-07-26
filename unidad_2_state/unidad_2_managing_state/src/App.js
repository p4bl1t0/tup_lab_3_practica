import './App.css';
import { useState } from 'react';

function App() {

  const numeroAleatorio = () => Math.round(Math.random());
  const [input1, setInput1] = useState(numeroAleatorio());

  const handleInput = (event) => {
    Number(event.target.value) === 1
      ? setInput1(Number(event.target.value))
      : setInput1(0);
  };


  return (
    <div className="App">
      <div>
      <div>
      <label htmlFor="input1">Entrada 1:</label>
      <input type="number" value={input1} id="input1" onChange={handleInput} />
    </div>
      </div>
      <div>
        <label><input type="checkbox" /> Entrada 2</label>
      </div>
        <div>
        <label for="selectGate">Compuerta lógica:</label>
        <select id="selectGate"></select>
      </div>
        <div><span>Salida: { /* aca iria el resultado*/ }</span></div>
    </div>
  );
}

export default App;
