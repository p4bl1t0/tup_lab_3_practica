import {useState} from "react";

const Element = ({ text, index, editElement, deleteElement }) => {
  const [editText, setEditText] = useState(text);
  const editInputHandler = (e) => {
    setEditText(e.target.value);
  }

  const numberListItem = (i) => {
    let num = Math.round(text);
    return Number(num) % 2 === 0 ? (
      <li key={i}>
        <p>{num} es par</p>
      </li>
    ) : (
      <li key={i}>
        <p>{num} es impar</p>
      </li>
    );
  };

  const textListItem = (i) => {
    return (
      <li key={i}>
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
