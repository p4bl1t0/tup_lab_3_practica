
export default function Input1({setInputValue, inputValue}) {
 
  const changeInput = (event) => {
    setInputValue(parseInt(event.target.value) === 1 ? 1 : 0);
  };

  return (
    <div>
      <label for="input1">Entrada 1: </label>
      <input
        type="number"
        id="input1"
        value={inputValue}
        onChange={changeInput}
      />
    </div>
  );
}
