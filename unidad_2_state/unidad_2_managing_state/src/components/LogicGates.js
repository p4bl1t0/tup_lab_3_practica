import React from "react";
import { useState, useEffect } from "react";

const LogicDoor = ({ input1, input2, onOutputChange }) => {
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
        return "Algo salió mal";
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
          <option value="or">OR</option>
          <option value="and">AND</option>
          <option value="nand">NAND</option>
          <option value="nor">NOR</option>
          <option value="xor">XOR</option>
        </select>
      </div>
      <div>
        <br></br>
        {/* <button onClick={handleOutput(input1, input2)}>Calcular</button> */}
        <br></br>
        <span>Salida: {handleOutput() === 1 ? "TRUE" : "FALSE"}</span>
        <br></br>
      </div>
    </div>
  );
};

export default LogicDoor;
