import { useState } from "react";

const LogicGates = ({ inputA, inputB }) => {
  const [selectInput, setSelectInput] = useState("");
  const selectChangeHandler = (e) => {
    setSelectInput(e.target.value);
  };
  const calculateResult = (gate, a, b) => {
    a = Number(a);
    b = Number(b);
    switch (gate) {
      case "and":
        return Number(a && b);
      case "or":
        return Number(a || b);
      case "xor":
        return Number(a !== b);
      case "nand":
        return Number(!(a && b));
      case "nor":
        return Number(!(a || b));
      default:
        return "Seleccione una puerta lógica";
    }
  };

  return (
    <div>
      <label for="selectGate">Compuerta lógica:</label>
      <select id="selectGate" onChange={selectChangeHandler}>
        <option default hidden></option>
        <option value="or">OR</option>
        <option value="and">AND</option>
        <option value="nand">NAND</option>
        <option value="nor">NOR</option>
        <option value="xor">XOR</option>
      </select>
      <div>
        <span>Salida: {calculateResult(selectInput, inputA, inputB)}</span>
      </div>
    </div>
  );
};

export default LogicGates;
