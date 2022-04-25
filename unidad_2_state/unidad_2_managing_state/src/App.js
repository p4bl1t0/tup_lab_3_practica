import './App.css';

import './LogicGate';

import {useState} from "react";

function App() {

  const [input1, setInput1] = useState(Math.round(Math.random())); //seteo el valor aleatoriamente entre 1 y 0
  const changeInputValue = (event) => {
    //console.log(event.target.value);
    setInput1(event.target.value == 1 ? 1 : 0);
  }

  const [checkBox, setCheckBox] = useState(0);
  const changeCheckBox = (event) => {
    //console.log(event.target.value);
    setCheckBox(event.target.value = 1 );
  }

  const [selectValue, setSelectValue] = useState('');
  const evaluateGate = (event) =>{
    //console.log(event.target.value);
    setSelectValue(event.target.value);
  }

  const [outPutValue, setOutPutValue] = useState('');
  

  const calculateGate = () => {
    switch(selectValue){
      case "and":
         setOutPutValue(input1 && checkBox == 1 ? 1 : 0);
         break;
      case "or":
         setOutPutValue(input1 || checkBox == 1 ? 1 : 0);
         break;
      case "nand":
         setOutPutValue(!(input1 && checkBox == 1 ? 1 : 0));
         break;
      case "nor":
         setOutPutValue(!(input1 || !checkBox == 1 ? 1: 0));
         break;
      case "xor":
         setOutPutValue(input1 !== checkBox == 1 ? 1: 0);
         break;
         default:
           return "Intente de nuevo";
    }
  }

  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1:</label>
        <input type="number" id="input1" value={input1} onChange = {changeInputValue} />
      </div>
      <div>
        <label><input type="checkbox" value={checkBox} onChange = {changeCheckBox}/> Entrada 2</label>
      </div>
      <div>
        <label for="selectGate">Compuerta lógica:</label>
        <select id="selectGate" value={selectValue} onChange = {evaluateGate}>
        <option>Seleccione</option>
        <option value={"and"}>AND</option>
        <option value={"or"}>OR</option>
        <option value={"nand"}>NAND</option>
        <option value={"nor"}>NOR</option>
        <option value={"xor"}>XOR</option>
        </select>
      </div>
        <button onClick={calculateGate} >Realizar cálculo</button>
        <div><span>Salida: { outPutValue }</span></div>
    </div>
  );
}

export default App;