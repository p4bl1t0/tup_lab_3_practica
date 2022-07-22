import React from "react";
import Select from "./Select";
import { useState } from "react";

const LogicGate = ({value1, value2, setLogicGateValue, logicGateValue }) => {

  const [selectValue, setSelectValue] = useState("OR");
  const selectHandler = (elem) => {
    setSelectValue(elem.target.value);
    ;
  };

  const setResult = () => {
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


  return (
    <div>
      <Select selectHandler={selectHandler} result={setResult} />
      <button onClick={setResult}>Submit</button>
      <br></br>
      <span>Salida: {logicGateValue}</span>
    </div>
  );
};

export default LogicGate;
