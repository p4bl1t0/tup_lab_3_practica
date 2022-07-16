import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  const [edit, setEdit] = useState();
  const [editBool, setEditBool] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input !== "") {
      if (!editBool) {
        setArray([...array, input]);
      } else {
        const listFilter = array.filter((var1, var2) => var2 !== edit);
        setArray([...listFilter, input]);
      }
      setEditBool(false);
      setInput("");
    } else {
      console.log("Campo vacio");
    }
  };

  const removeInput = (index) => {
    setArray((array) => array.filter((var1, var2) => var2 !== index));
  };

  const editInput = (index) => {
    setEditBool(true);
    setEdit(index);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Ingrese texto o numeros"
          value={input}
          onChange={handleInput}
        />
        <button onClick={handleAdd}>{editBool ? "Editar" : "Agregar"}</button>
      </div>
      <div>
        {array.map((element, index) => (
          <p key={index}>
            {Number(element) ? (
              Number(element % 2) === 0 ? (
                <p>
                  Par
                  <button onClick={() => removeInput(index)}>Borrar</button>
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
                <button onClick={() => editInput(index)}>Editar</button>
              </div>
            )}
          </p>
        ))}
      </div>
    </>
  );
}
export default App;
