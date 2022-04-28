import React from "react";
import { useState } from "react";
import { logic } from "./lib/functions";

const Logic = ({ value1, value2 }) => {
  const [selectValue, setSelectValue] = useState("OR");
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <div>
        <label for="selectGate">Compuerta lógica:</label>
        <select
          id="selectGate"
          value={selectValue}
          onChange={handleSelectChange}
        >
          <option value="OR">OR</option>
          <option value="AND">AND</option>
          <option value="NAND">NAND</option>
          <option value="NOR">NOR</option>
          <option value="XOR">XOR</option>
          <option value="XNOR">XNOR</option>
        </select>
      </div>
      <div>
        <span>Salida: {logic(value1 === "1", value2, selectValue)}</span>
      </div>
    </>
  );
};

export default Logic;
