import React from "react";

const ShowItem = ({ array, setArray }) => {
  const deleteItem = (i) => {
    if (i > -1) {
      array.splice(i, 1);
      setArray([...array]);
    }
  };

  const isEven = (num) => {
    num = Number(Math.round(num))
    return num % 2 === 0
      ? num + " es par"
      : num + " es impar";
  };

  const editItem = (index) => {
    const updateArray = [...array];
    updateArray[index] = prompt("Ingrese el valor actualizado");
    setArray(updateArray);
  };

  return (
    <div>
      {array.map((item, index) => (
        <div key={index}>
          {isNaN(item) ? (
            <input type="text" value={item}></input>
          ) : (
            <p>{isEven(item)}</p>
          )}
          <button
            onClick={() => {
              editItem(index);
            }}
          >
            Editar
          </button>
          <button
            onClick={() => {
              deleteItem(index);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowItem;
