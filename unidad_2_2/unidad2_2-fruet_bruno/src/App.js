import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);
  const [editFlag, setEditFlag] = useState(false);
  const [arrayActive, setArrayActive] = useState([]);

  const inputTextHandler = (event) => {
    setInputValue(event.target.value);
  };
  const clickAddHandler = () => {
    if (inputValue) {
      if (!editFlag) {
        setArray([...array, inputValue]);
        setArrayActive([...arrayActive, false]);
      } else {
        const index = arrayActive.indexOf(true);
        const newArray = array.map(
          (element, i) => (element = i === index ? inputValue : element)
        );
        setArray(newArray);
        setInputValue("");
        editButtonHandler();
      }
    }
    console.log(array);
    console.log(arrayActive);
    setInputValue("");
  };
  const deleteButtonHandler = (index) => {
    const newArray = array.filter((element, i) => i !== index);
    setArray(newArray);
    console.log(editFlag);
  };
  const editButtonHandler = (index) => {
    if (editFlag) {
      const newArrayActive = arrayActive.map((elem) => (elem = false));
      setArrayActive(newArrayActive);
    } else {
      const newArrayActive = arrayActive.map((elem, i) => i === index);
      setArrayActive(newArrayActive);
    }
    setEditFlag(!editFlag);
    console.log(editFlag);
  };

  return (
    <div className="App">
      <label>
        {editFlag
          ? "Modo Edición: Ingrese un nuevo valor "
          : "Ingrese un valor "}
      </label>
      <input type="text" value={inputValue} onChange={inputTextHandler}></input>
      <button onClick={clickAddHandler}>Agregar</button>
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
      ))}
    </div>
  );
}

export default App;
