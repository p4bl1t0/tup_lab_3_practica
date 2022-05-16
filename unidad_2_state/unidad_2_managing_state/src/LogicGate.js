import React from "react";

import { useState } from "react";

export default function LogicGate({
  input1,
  input2,
  outPutValue,
  setOutPutValue,
}) {
  const [selectValue, setSelectValue] = useState("");
  const evaluateGate = (event) => {
    //console.log(event.target.value);
    setSelectValue(event.target.value);
  };

  const calculateGate = () => {
    switch (selectValue) {
      case "and":
        setOutPutValue(input1 && input2 == 1 ? 1 : 0);
        break;
      case "or":
        setOutPutValue(input1 || input2 == 1 ? 1 : 0);
        break;
      case "nand":
        setOutPutValue(!(input1 && input2 == 1 ? 1 : 0));
        break;
      case "nor":
        setOutPutValue(!(input1 || !input2 == 1 ? 1 : 0));
        break;
      case "xor":
        setOutPutValue((input1 !== input2) == 1 ? 1 : 0);
        break;
      default:
        return "Intente de nuevo";
    }
  };

  return (
    <div>
      <div>
        <label for="selectGate">Compuerta lógica:</label>
        <select id="selectGate" value={selectValue} onChange={evaluateGate}>
          <option>Seleccione</option>
          <option value={"and"}>AND</option>
          <option value={"or"}>OR</option>
          <option value={"nand"}>NAND</option>
          <option value={"nor"}>NOR</option>
          <option value={"xor"}>XOR</option>
        </select>
      </div>
      <div>
        <button onClick={calculateGate}>Realizar cálculo</button>
      </div>
    </div>
  );
}
