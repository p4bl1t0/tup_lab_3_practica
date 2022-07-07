const NumberInput = ({ inputHandler, inputValue }) => {
  return (
    <div>
      <label htmlFor="inputOne">Entrada 1:</label>
      <input
        type="number"
        id="inputOne"
        value={inputValue}
        onChange={inputHandler}
      />
    </div>
  );
};

export default NumberInput;
