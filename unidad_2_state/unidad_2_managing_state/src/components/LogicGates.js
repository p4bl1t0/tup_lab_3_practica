import React from "react";

import { useState } from "react";

import Select from "./Select";

const LogicGates = ({ value1, value2, setLogicGateValue, logicGateValue }) => {
  const [selectValue, setSelectValue] = useState("DEFAULT");
  const Result = () => {
    if (selectValue === "OR") {
      setLogicGateValue(value1 || value2 ? 1 : 0);
    } else if (selectValue === "AND") {
      setLogicGateValue(value1 && value2 ? 1 : 0);
    } else if (selectValue === "NAND") {
      setLogicGateValue(1 - (value1 && value2) ? 1 : 0);
    } else if (selectValue === "NOR") {
      setLogicGateValue(1 - (value1 || value2) ? 1 : 0);
    } else if (selectValue === "XOR") {
      setLogicGateValue(value1 ^ value2 ? 1 : 0);
    }
  };

  const selectHandler = (elem) => {
    setSelectValue(elem.target.value);
  };

  return (
    <div>
      <Select selectHandler={selectHandler} result={Result} />
      <button onClick={Result}>Calcular compuerta</button>
      <br></br>
      <span>Salida: {logicGateValue}</span>
    </div>
  );
};

export default LogicGates;
