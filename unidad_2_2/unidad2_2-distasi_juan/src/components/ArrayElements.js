export default function ArrayElements({ array, setArray }) {
  const showItem = (item) => {
    return isNaN(item) ? item : Number(item) % 2 === 0 ? item + " es par" : item + " es impar";
  };

  const handleDelete = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const handleEdit = (index) => {
    const newArray = [...array];
    newArray[index] = prompt("Ingrese un nuevo valor");
    setArray(newArray);
  };

  return (
    <div>
      {array.map((item, index) => (
        <div key={index}>
          <p>{showItem(item)}</p>
          <button
            onClick={() => {
              handleDelete(index);
            }}
          >
            Borrar
          </button>
          <button
            onClick={() => {
              handleEdit(index);
            }}
          >
            Editar
          </button>
        </div>
      ))}
    </div>
  );
}
