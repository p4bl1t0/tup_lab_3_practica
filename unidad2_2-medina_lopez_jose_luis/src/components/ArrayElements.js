import React from "react";

const ArrayElements = ({ index, elem, onInputDelete, onInputEdit }) => {
  const num = Number(Math.round(elem));
  return (
    <div key={index}>
      {num ? (
        num % 2 === 0 ? (
          <p>{num}: es par</p>) : (<p>{num}: es impar</p>)) 
          : (
          <><input type="text" value={elem}></input><button onClick={() => onInputEdit(index)}>Editar</button></>
          )}
      <button onClick={() => onInputDelete(index)}>Borrar</button>
    </div>
  );
};

export default ArrayElements;