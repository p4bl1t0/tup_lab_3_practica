
export default function WordRender({ itemArray, editButtonHandler, eraseButtonHandler}) {


  const eraseHandler = () => {
    eraseButtonHandler(itemArray.id)
  }


  const editHandler = () => {
    editButtonHandler(itemArray.id)
  }

  return (
    <div>
      <input type="text" value={itemArray.text} />
      <button onClick={editHandler}>editar</button>
      <button onClick={eraseHandler}>borrar</button>
    </div>
  );
}
