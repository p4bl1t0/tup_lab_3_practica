import { useState } from "react";
import WordRender from "./WordRender";
import NumberRender from "./NumberRender";

import "./App.css";

function App() {
  const [inputString, setInputString] = useState([]);
  const [textValue, setTextValue] = useState("");

  const buttonHandler = () => {
    if (textValue) {
      const newSetArray = [...inputString, textValue];
      setInputString(newSetArray);
      setTextValue("");
    }
  };

  const inputTextHandler = (e) => {
    setTextValue(e.target.value);
  };

  const inputsMapper = inputString.map((itemArray) =>
    isNaN(itemArray) ? (
      <WordRender itemArray={itemArray} />
    ) : (
      <NumberRender itemArray={itemArray} />
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
