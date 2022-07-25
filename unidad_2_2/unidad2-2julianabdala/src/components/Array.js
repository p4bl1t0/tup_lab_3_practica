import React from "react";

const ParImpar = ({ array, setArray }) => {
  const deleteNum = (indice) => {
    if (indice > -1) {
      array.splice(indice, 1); //splice elimina un elemento donde indice es justamente el indice del array
      setArray([...array]);
    }
  };

  const esPar = (num) => {
    num = Number(Math.round(num));
    return num % 2 === 0 ? " par" : " impar";
  };

  const editNum = (index) => {
    const updateArray = [...array];
    updateArray[index] = alert("Ingrese otro valor");
    setArray(updateArray);
  };

  return (
    <div>
      {array.map((item, index) => (
        <div key={index}>
          {isNaN(item) ? (
            <input type="text" value={item}></input>
          ) : (
            <p>{esPar(item)}</p>
          )}
          <button
            onClick={() => {
              editNum(index);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              deleteNum(index);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ParImpar;
