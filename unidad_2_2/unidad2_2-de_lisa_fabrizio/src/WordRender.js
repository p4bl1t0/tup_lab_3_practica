export default function WordRender({ itemArray }) {

  const wordReturn = <input type="text" value={itemArray} />;
  
  return <div>{wordReturn}</div>;
}
