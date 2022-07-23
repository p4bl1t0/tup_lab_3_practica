import { useState } from "react";
import WordRender from "./WordRender";
import NumberRender from "./NumberRender";

import "./App.css";

function App() {

  const [inputString, setInputString] = useState([]);
  const [textValue, setTextValue] = useState("");


  const buttonHandler = () => {
    if (textValue) {
      const newSetArray = [
        ...inputString,
        {
          text: textValue,
          id: Math.random().toString(),
        },
      ];

      setInputString(newSetArray);
      setTextValue("");
    }
  };


  const inputTextHandler = (e) => {
    setTextValue(e.target.value);
  };


  const eraseButtonHandler = (id) => {
    const newArrayInputs = inputString.filter((item) => item.id !== id);
    setInputString(newArrayInputs);
  };


  const editButtonHandler = (id) => {
    const newInput = "Se cambió el texto";
    const newArrayWhitEdit = inputString.map((item) =>
      item.id === id ? { ...item, text: newInput } : item
    );
    setInputString(newArrayWhitEdit);
  };


  const inputsMapper = inputString.map((itemArray) =>
    isNaN( itemArray.text ) ? (
      <WordRender
        itemArray={itemArray}
        eraseButtonHandler={eraseButtonHandler}
        editButtonHandler={editButtonHandler}
      />
    ) : (
      <NumberRender
        itemArray={itemArray}
        eraseButtonHandler={eraseButtonHandler}
      />
    )
  );

  return (
    <div className="App">
      <input
        type="text"
        max="100"
        value={textValue}
        onChange={inputTextHandler}
        autoFocus
      />
      <button onClick={buttonHandler}>agregar</button>
      <br />
      <br />
      {inputsMapper}
    </div>
  );
}

export default App;
