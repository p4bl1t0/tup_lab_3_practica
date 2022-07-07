const SelectGates = ({ selectHandler }) => {
  return (
    <div>
      <label htmlFor="selectGate">Compuerta lógica:</label>
      <select id="selectGate" onChange={selectHandler}>
        <option>Seleccione una compuerta</option>
        <option value="OR">OR</option>
        <option value="AND">AND</option>
        <option value="NAND">NAND</option>
        <option value="NOR">NOR</option>
        <option value="XOR">XOR</option>
      </select>
    </div>
  );
};

export default SelectGates;
