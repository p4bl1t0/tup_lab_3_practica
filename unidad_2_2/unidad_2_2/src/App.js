import { useState } from "react";
import './App.css';

function App() {

  const [firstInput, setFirstInput] = useState("");
  const [firstArray, setArray] = useState([]);
  const [value2, setValue2] = useState();
  const [editVariable, setEditVariable] = useState(false);

  const handleInputText = (event) => {
    setFirstInput(event.target.value);
  };
  
     const updateArray = () => {
    if(firstInput !== ""){
      if(!editVariable){
        setArray([...firstArray, firstInput])   
        console.log(firstArray); 
    }else{
      firstArray[value2] = firstInput;
      console.log(firstArray);
      }
      setEditVariable(false);
      setFirstInput("");
  }; 
}

  const editHandler = (index) =>{
    setEditVariable(true);
    setValue2(index);
  }
  const deleteHandler = (index) =>{
    const array2 = firstArray.filter((x, z) => z !== index);
    setArray([...array2]);
    console.log(firstArray);
  };


  return (
    <div className="App">
      <div>
      <input type="text"
      id="firstInput"
      value = {firstInput}
      onChange={handleInputText}/>
      </div>
      <div>
        <button type="submit" onClick={updateArray} >{ editVariable ? "Editar" : "Agregar"}</button>
      </div>

      <div>
      {firstArray.map((valuecur, index) => 
        <span key={index}>
          {Number(valuecur) ? (
            Number(valuecur % 2) === 0 ? (
              <p>
                {Math.round(valuecur)} es par
              </p>
            ) : (
              <p>{Math.round(valuecur)} es impar
              </p>
            )
          ) : (
            <div>
              <input type="text" value={valuecur}></input>
            </div>
          )}
            <div>
      <button type="button" onClick={() => deleteHandler(index)}>Borrar</button>
      </div>
      <div>
      <button onClick={() => editHandler(index)}>Editar</button>
      </div>
        </span>
      )}
    </div>
    </div>
    
  );
}


export default App;
