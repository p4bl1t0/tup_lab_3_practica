export default function NumberRender({ itemArray }) {

  const number = Math.round(itemArray);

  const numberReturn =
   number % 2 === 0 ? (
      <p>{number} (Es Par)</p>
    ) : (
      <p>{number} (Es Impar)</p>
    );

  return <div>{numberReturn}</div>;
}
