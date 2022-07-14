import React from "react";

const ShowItem = ({array, setArray}) => {
  const deleteItem = (i) => {
    if (i > -1) {
      array.splice(i, 1);
      setArray([...array]);
    }
  };

  const editItem = (index) => {
    const updateArray = [...array];
    updateArray[index] = prompt("Ingrese el valor actualizado");
    setArray(updateArray);
  };

  return (
    <div>
      {array.map((item, index) => (
        <p key={index}>
          {Number(item % 2) === 0 ? (
            item
          ) : (
            <div>
              <input type="text" value={item} />
              <button
                onClick={() => {
                  editItem(index);
                }}
              >
                Editar
              </button>
            </div>
          )}
          <button
            onClick={() => {
              deleteItem(index);
            }}
          >
            Eliminar
          </button>
        </p>
      ))}
    </div>
  );
};

export default ShowItem;
