import { useState } from 'react';
import './App.css';
import ShowValues from './Components/ShowValues';
const App = () => {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const btnHandler = () => {
    if (inputValue) {
      setArray([...array, inputValue]);
      setInputValue('');
    }
  }

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <label>Ingrese un valor</label>
      <input type="text" value={inputValue} onChange={inputHandler}></input>
      <button onClick={btnHandler}>AGREGAR</button>
      <ShowValues array={array} />
    </div >
  );
}

export default App;
