import React from "react";

const LogicGates = ({ input1, input2, setValue }) => {
  const GateHandler = (event) => {
    switch (event.target.value) {
      case "or":
        return input1 == 1 || input2 == 1 ? setValue(1) : setValue(0);
      case "nor":
        return !input1 == 1 || !input2 == 1 ? setValue(1) : setValue(0);
      case "xor":
        return (input1 == 1) ^ (input2 == 1) ? setValue(1) : setValue(0);
      case "and":
        return input1 == 1 && input2 == 1 ? setValue(1) : setValue(0);
      case "nand":
        return !input1 == 1 && !input2 == 1 ? setValue(1) : setValue(0);

      default:
        return "error";
    }
  };
  return (
    <div>
      <label for="selectGate">Compuerta lógica: </label>
      <select id="selectGate" onChange={GateHandler}>
        <option value="or">or</option>
        <option value="nor">nor</option>
        <option value="xor">xor</option>
        <option value="and">and</option>
        <option value="nand">nand</option>
      </select>
    </div>
  );
};

export default LogicGates;
