import { useState } from "react";
import "./App.css";

function App() {
  const [inputString, setInputString] = useState([]);
  const [textValue, setTextValue] = useState("");

  console.log("cadena ", inputString);

  const buttonHandler = () => {
    const aux = [...inputString.concat(textValue)] ;
      setInputString(aux);
      setTextValue("");
  };

  const inputTextHandler = (e) => {
    setTextValue(e.target.value)
  }

  return (
    <div className="App">
        <input
          type="text"
          max="100"
          value={textValue}
          onChange={inputTextHandler}
        />
        <button onClick={buttonHandler}>agregar</button>
    </div>
  );
}

export default App;
