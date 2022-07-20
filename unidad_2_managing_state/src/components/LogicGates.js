import { useState } from "react";

const LogicGates = ({ newInput, checkboxInput }) => {
  const [selectInput, setSelectInput] = useState("");
  
  const selectChangeHandler = (e) => {
    setSelectInput(e.target.value);
  };
  const selectGate = () => {
    switch (selectInput) {
      case "and":
        return Number(newInput && checkboxInput);
      case "or":
        return Number(newInput || checkboxInput);
      case "xor":
        return Number(newInput !== checkboxInput);
      case "nand":
        return Number(!(newInput && checkboxInput));
      case "nor":
        return Number(!(newInput || checkboxInput));
      default:
        return "Seleccione una puerta lógica";
    }
  };

  return (
    <div>
      <label for="selectGate">Compuerta lógica:</label>
      <select id="selectGate" onChange={selectChangeHandler}>
        <option value="or">OR</option>
        <option value="and">AND</option>
        <option value="nand">NAND</option>
        <option value="nor">NOR</option>
        <option value="xor">XOR</option>
      </select>
      <div>
        <span>
          Salida: { selectGate() }
        </span>
      </div>
    </div>
  );
};

export default LogicGates;