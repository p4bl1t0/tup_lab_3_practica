import React, { useState } from "react";

function LogicGates({ newInput, checked_, onChange }) {
  const [selectInput, setSelectInput] = useState("");
  const changeSelectGate = (event) => {
    setSelectInput(event.target.value);
    if (typeof onChange === "function") 
      onChange(calculateGate());
  };

  React.useEffect(() => {
    if (typeof onChange === "function") 
      onChange(calculateGate());
  }, [newInput, checked_, selectInput]);

  const calculateGate = () => {
    switch (selectInput) {
      case "OR":
        return Number(newInput || checked_);

      case "AND":
        return Number(newInput && checked_);

      case "NOR":
        return Number(!(newInput || checked_));

      case "NAND":
        return Number(!(newInput && checked_));

      case "XOR":
        return Number(newInput !== checked_);

      default:
        return "Seleccione una puerta logica";
    }
  };

  return (
    <div>
      <label for="selectGate">Compuerta lógica:</label>
      <select id="selectGate" onChange={changeSelectGate}>
        <option>OR</option>
        <option>AND</option>
        <option>NAND</option>
        <option>NOR</option>
        <option>XOR</option>
      </select>
      <div>
        <span>Salida: {calculateGate()}</span>
      </div>
    </div>
  );
}
export default LogicGates;
