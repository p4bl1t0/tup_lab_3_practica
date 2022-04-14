const Select = ({ checked1, result, input1, setResult }) => {
  const handleChangeSelect = (e) => {
    if (e.target.value === "and") {
      input1 && checked1 ? setResult(1) : setResult(0);
    } else if (e.target.value === "or") {
      input1 || checked1 ? setResult(1) : setResult(0);
    }
    if (e.target.value === "nand") {
      !input1 && !checked1 ? setResult(1) : setResult(0);
    }
    if (e.target.value === "nor") {
      !input1 || !checked1 ? setResult(1) : setResult(0);
    }
  };
  return (
    <div>
      <label htmlFor="selectGate">Compuerta lógica:</label>
      <select
        id="selectGate"
        onChange={handleChangeSelect}
        defaultValue={"DEFAULT"}
      >
        <option value={"DEFAULT"} disabled>
          Seleccione una opcion
        </option>
        <option value="and">and</option>
        <option value="or">or</option>
        <option value="nor">nor</option>
        <option value="nand">nand</option>
      </select>
    </div>
  );
};

export default Select;
