import "./App.css";
import { useState } from "react";

function App() {
  const [listItems, setListItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [activator, setActivator] = useState([]);
  const [edit, setEdit] = useState(false);

  const addHandler = (e) => {
    if (inputValue !== "") {
      if (!edit) {
        setListItems([inputValue, ...listItems]);
        setActivator([false, ...activator]);
        setInputValue("");
      } else {
        const index = activator.indexOf(true);
        const newListItems = listItems.map(
          (x, i) => (x = i === index ? inputValue : x)
        );
        setListItems(newListItems);
        setInputValue("");
        editHandler();
      }
    }
  };

  const editHandler = (index) => {
    if (edit) {
      const newListItems = activator.map((x) => (x = false));
      setActivator(newListItems);
    } else {
      const newListItems = activator.map((x, i) => i === index);
      setActivator(newListItems);
    }
    setEdit(!edit);
  };

  const removeHandler = (index) => {
    const newListItems = listItems.filter((x, i) => i !== index);
    setListItems(newListItems);
    const newActiveClasses = activator.filter((x, i) => i !== index);
    setActivator(newActiveClasses);
  };

  return (
    <div className="app">
      <div>
        <div></div>
        <label htmlFor="inputText" className="label-add">
          {edit
            ? "Editar el item seleccionado:"
            : "Agregar un item a la lista:"}
        </label>
        <input
          className="input-add"
          id="inputText"
          type="text"
          placeholder="Agrega un item..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="btn-add"
          type="button"
          onClick={() => {
            addHandler();
          }}
        >
          {edit ? "Editar" : "Agregar"}
        </button>
      </div>
      <div>
        {listItems.map((elem, i) => (
          <div
            className={`listItem ${activator[i] ? "selected" : ""} ${
              edit ? "disable" : ""
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
              <button
                type="button"
                className="btn-remove"
                onClick={() => removeHandler(i)}
              >
                Borrar
              </button>
              <button
                type="button"
                className="btn-edit"
                onClick={() => editHandler(i)}
              >
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
