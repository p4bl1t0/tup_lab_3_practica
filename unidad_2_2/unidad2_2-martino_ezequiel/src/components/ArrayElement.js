import React from "react";

const ArrayElement = ({ index, elem, onInputDelete, onInputEdit }) => {
  return (
    <div key={index}>
      {Number(elem) ? (
        Number(elem) % 2 === 0 ? (
          <>
            <p>{elem}: es par</p>
          </>
        ) : (
          <>
            <p>{elem}: es impar</p>
          </>
        )
      ) : (
        <>
          <input type="text" value={elem}></input>
          <button onClick={() => onInputEdit(index)}>Editar</button>
        </>
      )}

      <button onClick={() => onInputDelete(index)}>Borrar</button>
    </div>
  );
};

export default ArrayElement;
