import { useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [array1, setArray1] = useState([]);
  const [value2, setValue2] = useState();
  const [editVariable, setEditVariable] = useState(false);

  const handleInputText = (event) => {
    setInput1(event.target.value);
   
  };

  const updateArray = () => {
     if(input1 !== ""){
       if(!editVariable){
         setArray1([...array1, input1])   
         console.log(array1); 
     }else{
       array1[value2] = input1;
       console.log(array1);
       }
       setEditVariable(false);
      setInput1(""); //vacio el campo de texto
     }
  
  };

  const editHandler = (index) =>{
    setEditVariable(true);
    setValue2(index);
  }
  const deleteHandler = (index) =>{
    const array2 = array1.filter((x, z) => z !== index);
    setArray1([...array2]);
    console.log(array1);
  };


  return (
    <div  className="App">
      <div>
        <label for="input1">Ingrese Texto: </label>
        <input
          type="text"
          id="input1"
          value={input1}
          onChange={handleInputText}
        />
      </div>
      <div>
        <button type="submit" onClick={updateArray}>{ editVariable ? "Editar" : "Agregar"}</button>
      </div>
      <div>
        {array1.map((currentValue, index) => (
          
          <span key={index}>
            {/*para que no se rompa si es repite */}
            {Number(currentValue) ? (
              Number(currentValue % 2) === 0 ? (
                <p>
                  {Math.round(currentValue)} es par
                </p> /*redondeo los numero por enunciado*/
              ) : (
                <p>{Math.round(currentValue)} es impar</p>
              )
            ) : (
              <div>
                <input type="text" value={currentValue}></input>
              </div>
            )}
            <div>
      <button type="button" onClick={() => deleteHandler(index)}>Borrar</button>
      </div>
      <div>
        <button onClick={() => editHandler(index)}>Editar</button>
      </div>
          </span>
        ))}
        
      </div>
      
    </div>
  );
}
export default App;
