import React from "react";
import { useState, useEffect } from "react";

const LogicGates = ({ input1, input2, onOutputChange }) => {
  const [selectDoor, setSelectDoor] = useState("or");

  const handleSelect = (e) => {
    setSelectDoor(e.target.value);
  };

  const handleOutput = () => {
    input1 = Number(input1);
    input2 = Number(input2);
    let output;
    switch (selectDoor) {
      case "or":
        output = input1 || input2 ? 1 : 0;
        break;
      case "and":
        output = input1 && input2 ? 1 : 0;
        break;
      case "nand":
        output = !input1 || !input2 ? 1 : 0;
        break;
      case "xor":
        output = !input1 !== !input2 ? 1 : 0;
        break;
      case "nor":
        output = !(input1 || input2) ? 1 : 0;
        break;
      default:
        return "error";
    }
    return output;
  };

  useEffect(() => {
    if (typeof onOutputChange === "function") onOutputChange(handleOutput());
  }, [input1, input2, selectDoor]);

  return (
    <div>
      <div>
        <label htmlFor="select-gate">Compuerta lógica: </label>
        <select id="select-gate" onChange={handleSelect} value={selectDoor}>
          <option value="or">or</option>
          <option value="and">and</option>
          <option value="nand">nand</option>
          <option value="nor">nor</option>
          <option value="xor">xor</option>
        </select>
      </div>
      <div>
        <span>Salida: {handleOutput() === 1 ? "true" : "false"}</span>
      </div>
    </div>
  );
};

export default LogicGates