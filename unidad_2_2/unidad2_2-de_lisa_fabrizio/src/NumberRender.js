export default function NumberRender({ itemArray, eraseButtonHandler }) {
  
  const number = Math.round(parseInt(itemArray.text));

  const numberReturn =
    number % 2 === 0 ? <p>{number} (Es Par)</p> : <p>{number} (Es Impar)</p>;

  const eraseHandler = () => {
    eraseButtonHandler(itemArray.id);
  };

  return (
    <div>
      {numberReturn}
      <button onClick={eraseHandler}>borrar</button>
    </div>
  );
}
