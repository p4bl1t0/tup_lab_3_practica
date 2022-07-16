import { useState } from "react";

const Element = ({ text, index, editElement, deleteElement }) => {
  const [editText, setEditText] = useState(text);
  const editInputHandler = (event) => {
    setEditText(event.target.value);
  };

  const numberListItem = (x) => {
    let number = Math.round(text);
    return Number(number) % 2 === 0 ? (
      <li key={x}>
        <p>{number} es par</p>
      </li>
    ) : (
      <li key={x}>
        <p>{number} es impar</p>
      </li>
    );
  };

  const textListItem = (x) => {
    return (
      <li key={x}>
        <input type="text" value={editText} onChange={editInputHandler} />
        <button onClick={() => editElement(index, editText)}>Editar</button>
        <button onClick={() => deleteElement(index)}>Borrar</button>
      </li>
    );
  };

  if (Number(text)) {
    return numberListItem(index.toString());
  }
  return textListItem(index.toString());
};

export default Element;
