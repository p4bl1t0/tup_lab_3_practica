import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInputText] = useState("");
  const [array, setArray] = useState([]);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleAdd = () => {
    input !== "" ? setArray([...array, input]) : console.log("Vacio");
    setInputText("");
  };

  const removeInput = (indexItem) => {
    setArray((array) => array.filter((array, index) => index !== indexItem));
  };

  const editInput = {
    
  };

  return (
    <>
      <div>
        <input type="text" value={input} onChange={handleInput} />
        <button onClick={handleAdd}>Enviar</button>
      </div>
      <div>
        {array.map((element, index) => (
          <p key={index}>
            {Number(element) ? (
              Number(element % 2) === 0 ? (
                <p>
                  Par<button onClick={() => removeInput(index)}>Borrar</button>
                </p>
              ) : (
                <p>
                  Impar
                  <button onClick={() => removeInput(index)}>Borrar</button>
                </p>
              )
            ) : (
              <div>
                <input type="text" value={element} />
                <button onClick={() => removeInput(index)}>Borrar</button>
                <button onChange={() => editInput}>Editar</button>
              </div>
            )}
            {}
          </p>
        ))}
      </div>
    </>
  );
}
// const [input, setInput] = useState("");
// const [array, setArray] = useState([]);

// const changeArray = (e) => {
//   setArray(e.target.value);
// };

// const handleAdd = () => {
//   input !== "" ? setArray([...array, input]) : console.log("Vacio");
// };

// return (
//   <form>
//     <div>
//       <label htmlFor="texto">Ingrese texto</label>
//       <input type="text" value={input} onChange={changeArray} />
//       <button onClick={handleAdd}>Enviar</button>
//     </div>
//   </form>
// );
// }
export default App;
