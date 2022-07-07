import { useState } from "react";

import SelectGates from "./SelectGates";

function LogicGates({ valueOne, valueTwo, setLogicGate, logicGate }) {
  const [selectInput, setSelectInput] = useState("");

  const CalculateGate = () => {
    switch (selectInput) {
      case "OR":
        return setLogicGate(valueOne || valueTwo ? 1 : 0);

      case "AND":
        return setLogicGate(valueOne && valueTwo ? 1 : 0);

      case "NOR":
        return setLogicGate(1 - (valueOne || valueTwo) ? 1 : 0);

      case "NAND":
        return setLogicGate(1 - (valueOne && valueTwo) ? 1 : 0);

      case "XOR":
        return setLogicGate(valueOne ^ valueTwo ? 1 : 0);

      default:
        return "";
    }
  };

  const changeSelectHandler = (elem) => {
    setSelectInput(elem.target.value);
  };

  return (
    <div>
      <br></br>
      <SelectGates
        selectHandler={changeSelectHandler}
        calculateGate={CalculateGate}
      />
      <br></br>
      <button onClick={CalculateGate}>Calcular compuerta</button>
      <br></br>
      <br></br>
      <span>Salida:{logicGate}</span>
    </div>
  );
}
export default LogicGates;
