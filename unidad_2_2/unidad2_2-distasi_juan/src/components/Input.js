export default function Input({ input, setInput, array, setArray }) {
  function inputHandler(e) {
    setInput(e.target.value);
  }

  const buttonHandler = () => {
    if (input.length > 0) {
      setArray([...array, input]);
    } else alert("Ingrese un valor");
    setInput("");
  };

  return (
    <div>
      <label>Input: </label>
      <input type="text" value={input} onChange={inputHandler} />
      <button type="button" onClick={buttonHandler}>
        add
      </button>
    </div>
  );
}
