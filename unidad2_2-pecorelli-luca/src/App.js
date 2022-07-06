import { useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [array1, setArray] = useState([]);
  const [editVariable, setEditVariable] = useState(false);
  const [array2, setArray2] = useState([]);


  const handleInputText = (event) => {
    console.log(event.target.value);
    setInput1(event.target.value);
  };

  const updateArray = () => {
    input1 !== ""
      ? setArray([...array1, input1])
      : console.log("No se ingresó nada");
    setInput1(""); //vacio el campo de texto
  };
  const deleteHandler = (indice) => {
    const newArray = array1.filter((x, i) => i !== indice);
    setArray(newArray);
    console.log(editFlag);
  };
  const editHandler = (indice) => {
    if (editVariable) {
      const newArray2 = array2.map((x) => (x = false));
      setArrayActive(newArrayActive);
    } else {
      const newArray2 = array2.map((x, i) => i === indice);
      setArrayActive(newArrayActive);
    }
    setEditFlag(!editVariable);
    console.log(editVariable);
  };
  return (
    <div className="App">
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
        <button onClick={updateArray}>Agregar</button>
      </div>
      <div>
        {array1.map((currentValue, indice) => (
          <p key={indice}>
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
                <button onClick={() => editHandler(indice)}>Editar</button>
            </p>)
        </div>
            }
      </div>
  )</div>
       <div>
         <button onClick={deleteHandler()}>Delete</button>
       </div>
    </div>
  );
}
{array.map((element, index) => (
  <div key={index}>
    {parseInt(element) ? (
      <span key={index}>
        {parseInt(element) % 2 === 0 ? (
          <span>{element} Es Par </span>
        ) : (
          <span>{element} Es Impar </span>
        )}
      </span>
    ) : (
      <span>
        <input type="text" value={element} readOnly></input>
        <button onClick={() => editButtonHandler(index)}>Editar</button>
      </span>
    )}
    <button onClick={() => deleteButtonHandler(index)}>Borrar</button>
  </div>
)
  ,  }   
export default App;
