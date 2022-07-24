import './App.css';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  const [array, setArray] =  useState([]);
  const handleInputText = (evento) => {
    setInputText(evento.target.value);
  }
  const handleAdd = () => {
    inputText !== "" ? setArray([...array, inputText]) : console.log("empty");
    setInputText("");
  }

  const removeElement = (index) => {
    const updatedElements = array.filter(
      (elem, i) => i !== index
    );
    setArray([...updatedElements]);
  }; 



  return (
    <div className="App">
        <input type="text" value={inputText} onChange={handleInputText} />
        <button onClick={handleAdd}>Enviar</button>
        <div>
          {array.map((elem, index) => {
            let number = Number(elem);
            return (
            <p key={index}>
              {number ? ( 
              (number % 2 === 0) ? (
                <p>{elem} es par <button onClick={removeElement}>Borrar</button></p>                
              ) : (
                <p>{elem} es impar <button onClick={removeElement}>Borrar</button></p>
              )
              ) : (        
                <div>
                  <input type="text" value={elem} />                
                  <button onClick={removeElement}>Borrar</button>
                </div>          
              )}
            </p>
            );
        })}
        </div>
    </div>
  );
}

export default App;
