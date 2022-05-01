import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [activeClasses, setActiveClasses] = useState([]);
  const [canEdit, setCanEdit] = useState(false);

  const addHandler = (e) => {
    if (inputValue !== "") {
      if (!canEdit) {
        setList([inputValue, ...list]);
        setActiveClasses([false, ...activeClasses]);
        setInputValue("");
      } else {
        const index = activeClasses.indexOf(true);
        const newList = list.map((x, i) => (x = i === index ? inputValue : x));
        setList(newList);
        setInputValue("");
        editHandler();
      }
    }
  };

  const editHandler = (index) => {
    if (canEdit) {
      const newList = activeClasses.map((x) => (x = false));
      setActiveClasses(newList);
    } else {
      const newList = activeClasses.map((x, i) => i === index);
      setActiveClasses(newList);
    }
    setCanEdit(!canEdit);
  };

  const removeHandler = (index) => {
    const newList = list.filter((x, i) => i !== index);
    setList(newList);
    const newActiveClasses = activeClasses.filter((x, i) => i !== index);
    setActiveClasses(newActiveClasses);
  };

  const cancelHandler = () => {
    setInputValue("");
    const newList = activeClasses.map((x) => (x = false));
    setActiveClasses(newList);
    setCanEdit(!canEdit);
  };

  return (
    <div className="App">
      <div className="container">
        <label htmlFor="inputText" className="helper">
          {canEdit
            ? "Editar el item seleccionado:"
            : "Agregar un item a la lista:"}
        </label>
        <input
          id="inputText"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="add"
          type="button"
          onClick={() => {
            addHandler();
          }}
        >
          {canEdit ? "Editar" : "Agregar"}
        </button>
        <button
          className={canEdit ? "" : "no-display"}
          type="button"
          onClick={cancelHandler}
        >
          Cancelar
        </button>
      </div>
      <div>
        {list.map((elem, i) => (
          <div
            className={`listItem ${activeClasses[i] ? "selected" : ""} ${
              canEdit ? "disable" : ""
            }`}
            key={i}
          >
            {Number(elem) ? (
              Number(elem) % 2 === 0 ? (
                <span>{elem} es par</span>
              ) : (
                <span>{elem} es impar</span>
              )
            ) : (
              <input type="text" value={elem} />
            )}
            <div>
              <button type="button" onClick={() => removeHandler(i)}>
                Borrar
              </button>
              <button type="button" onClick={() => editHandler(i)}>
                Editar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
