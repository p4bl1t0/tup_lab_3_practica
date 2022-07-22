import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const arrayCleaner = () => {
    setArray([]);
  };

  const editInput = () => {
    setInput("");
    document.getElementById("edit").value = ;
    
  };

  const buttonHandler = () => {
    input !== "" ? setArray([...array, input]) : alert("Ingrese un valor");
    setInput("");
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
          <p key={main}>
            {}
            {Number(value) ? (
              Number(value % 2) === 0 ? (
                <p>{Math.round(value)} es par</p>
              ) : (
                <p>{Math.round(value)} es impar</p>
              )
            ) : (
              <div>
                <button onClick={editInput}>Editar</button>
                <input id="edit" type="text" value={value} />
              </div>
            )}
          </p>
        ))}
      </div>
      <div>
        <button onClick={arrayCleaner}>Borrar</button>
      </div>
    </div>
  );
}

export default App;
