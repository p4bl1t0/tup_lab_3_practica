export default function WordRender({ itemArray, editButtonHandler, eraseButtonHandler}) {

  const eraseHandler = () => {
    eraseButtonHandler(itemArray.id)
  }

  return (
    <div>
      <input type="text" value={itemArray.text} />
      <button onClick={editButtonHandler}>editar</button>
      <button onClick={eraseHandler}>borrar</button>
    </div>
  );
}
