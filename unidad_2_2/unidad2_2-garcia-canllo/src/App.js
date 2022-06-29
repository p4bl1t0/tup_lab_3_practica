import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [textList, setTextList] = useState([]);
  const [inputToEdit, setInputToEdit] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const inputFocus = useRef(null);

  const onInputAdd = () => {
    if (!input) console.log("No puedes ingresar un input vacio");

    if (!isEdit) {
      setTextList([...textList, input]);
    } else {
      const filteredList = textList.filter((element, i) => i !== inputToEdit);
      setTextList([...filteredList, input]);
    }

    setIsEdit(false);
    setInput("");
  };

  const onInputDelete = index => {
    const filteredList = textList.filter((element, i) => i !== index);
    setTextList([...filteredList]);
  };

  const onInputEdit = index => {
    inputFocus.current.focus();
    setIsEdit(true);
    setInputToEdit(index);
  };

  return (
    <>
      <div className="background">
        <div className="container">
          <input
            type="text"
            placeholder="Ingresar un texto"
            value={input}
            onChange={e => setInput(e.target.value)}
            ref={inputFocus}
          />
          <button onClick={onInputAdd}>{isEdit ? "Editar" : "Agregar"}</button>

          {textList?.map((el, index) =>
            Number(el) ? (
              Number(el) % 2 === 0 ? (
                <div key={index}>
                  <p>{el}: Par</p>
                  <button onClick={() => onInputDelete(index)}>Borrar</button>
                </div>
              ) : (
                <div key={index}>
                  <p>{el}: Impar</p>
                  <button onClick={() => onInputDelete(index)}>Borrar</button>
                </div>
              )
            ) : (
              <div key={index}>
                <input type="text" placeholder={el} value={el} />
                <button onClick={() => onInputDelete(index)}>Borrar</button>
                <button onClick={() => onInputEdit(index)}>Editar</button>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default App;
