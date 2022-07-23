import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  const [value, setValue] = useState();
  const [editVar, setVar] = useState(false);

  const handleInputText = (e) => {
    setInput(e.target.value);
   
  };

  const updateHandler = () => {
     if(input !== ""){
       if(!editVar){
         setArray([...array, input])  
     }else{
       array[value] = input;
       }
       setVar(false);
      setInput("");
     }
  
  };

  const editInput = (index) =>{
    setVar(true);
    setValue(index);
  }
  const deleteInput = (index) =>{
    const array2 = array.filter((x, z) => z !== index);
    setArray([...array2]);
  };


  return (
    <div  className="App">
      <div>
        <label for="input">Ingrese Texto: </label>
        <input
          type="text"
          id="input"
          value={input}
          onChange={handleInputText}
        />
      </div>
      <div>
        <button type="submit" onClick={updateHandler}>{ editVar ? "Editar" : "Agregar"}</button>
      </div>
      <div>
        {array.map((element, index) => ( 
        <span key={index}>
            {Number(element) ? (
              Number(element % 2) === 0 ? (
                <p>
                  {element} PAR
                </p>
              ) : (
                <p>{element} IMPAR</p>
              )
            ) : (
              <div>
                <input type="text" value={element}></input>
              </div>
            )}
            <div>
      <button type="button" onClick={() => deleteInput(index)}>Borrar</button>
      </div>
      <div>
        <button onClick={() => editInput(index)}>Editar</button>
      </div>
          </span>
        ))}
        
      </div>
      
    </div>
  );
}
export default App;