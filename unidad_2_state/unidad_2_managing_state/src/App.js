import './App.css';
import { useState } from 'react';

function App() {

  // Ejercicio 1.

  const [change, setChange] = useState(0)

  const changeValue = (event) => {
    console.log(event.target.value)
    let valorFinal;

    if (event.target.value === "1"){
      valorFinal = 1;
    }
    else{
      valorFinal = 0;
    }

    console.log(valorFinal);
    setChange(valorFinal)
      
  }

  // Ejercicio 2.

  const [check, setCheck] = useState(0)

  const changeCheck = () => {

    if (check === 1) {
      setCheck(0)
    }
    else {
      setCheck(1)
    }
  }

  // Ejercicio 3.

  const [option, setOption] = useState('')

  const changeOption = (ev) => {

    if (ev.target.value === "or") {

      if (check || change) {
        setOption(1)
      }
      else{
        setOption(0)
      }
    } 
    else if (ev.target.value === "and") {

      if (check && change) {
        setOption(1)
      }
      else{
        setOption(0)
      }

    }
    else if (ev.target.value === "nand"){

      if (!check && !change) {
        setOption(1)
      }
      else{
        setOption(0)
      }
    }
    else {
      if (!check || !change) {
        setOption(1)
      }
      else{
        setOption(0)
      }
    }

  }



  return (
    <div className="App">
      <div>
        <label htmlFor = "input1">Entrada 1:</label>
        <input onChange={changeValue} value={change} type="number" id="input1" />
      </div>
      <div>
        <label><input onChange = {changeCheck}  type="checkbox" /> Entrada 2</label>
      </div>
        <div>
        <label htmlFor = "selectGate">Compuerta lógica:</label>
        <select onChange={changeOption} id="selectGate">
          <option value="or">Or</option>
          <option value="and">And</option>
          <option value="nand">Nand</option>
          <option value="nor">Nor</option>
        </select>
      </div>
        <div><span>Salida:{option} </span></div>
    </div>
  );
}

export default App;
