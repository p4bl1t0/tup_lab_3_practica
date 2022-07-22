import React from "react";

const Select = ({selectHandler}) => {
  return (
    <div>
      <label htmlFor="selectGate">Compuerta lógica:</label>
      <select id="selectGate" onChange={selectHandler} defaultValue={"DEFAULT"}>
        <option value={"DEFAULT"} disabled>
          Seleccione una opción
        </option>
        <option value="OR">OR</option>
        <option value="AND">AND</option>
        <option value="NAND">NAND</option>
        <option value="NOR">NOR</option>
        <option value="XOR">XOR</option>
      </select>
    </div>
  );
};

export default Select;