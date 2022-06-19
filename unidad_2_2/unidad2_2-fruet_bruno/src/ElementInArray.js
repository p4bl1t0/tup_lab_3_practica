import React from "react";
import { useState } from "react";

const ElementInArray = ({ element, onDeleteButton, onElementToDelete }) => {
  const [deleteFlag, setDeleteFlag] = useState(false);
  const buttonDeleteHandler = () => {
    setDeleteFlag(true);
    console.log(deleteFlag);
  };
  onDeleteButton(deleteFlag);
  onElementToDelete(element);
  return (
    <div>
      {parseInt(element) ? (
        <div>{element}</div>
      ) : (
        <input type="text" defaultValue={element}></input>
      )}
      <button onClick={buttonDeleteHandler}>Borrar</button>
    </div>
  );
};

export default ElementInArray;
