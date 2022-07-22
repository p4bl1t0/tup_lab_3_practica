import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  const [value2, setValue2] = useState();
  const [edit, setEdit] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const arrayCleaner = () => {
    setArray([]);
  };

  const editInput = (main) => {
    setEdit(true);
    setValue2(main);
  };

  const buttonHandler = () => {
    if (input !== "") {
      if (!edit) {
        setArray([...array, input]);
      } else {
        array[value2] = input;
      }
      setEdit(false);
      setInput("");
    }
  };

  return (
    <div className="App">
      <div>
        <input type="text" id="input" value={input} onChange={inputHandler} />
      </div>
      <div>
        <button onClick={buttonHandler}>Submit</button>
      </div>
      <div>
        {array.map((value, main) => (
          <span key={main}>
            {Number(value) ? (
              Number(value % 2) === 0 ? (
                <p>
                  {Math.round(value)} es par
                </p> 
              ) : (
                <p>{Math.round(value)} es impar</p>
              )
            ) : (
              <div>
                <input type="text" value={value}></input>
              </div>
            )}
            <div>
              <button onClick={() => editInput(main)}>Editar</button>
            </div>
          </span>
        ))}
      </div>
      <div>
        <button onClick={arrayCleaner}>Borrar</button>
      </div>
    </div>
  );
}

export default App;
