import React from "react";
import Select from "./Select";
import { useState } from "react";

const LogicGate = ({
  inputValue,
  checkBoxValue,
}) => {

  const [selectValue, setSelectValue] = useState("OR");
  const selectHandler = (elem) => {
    setSelectValue(elem.target.value);
    ;
  };

  const setResult = () => {
    if (selectValue === "OR") {
      return inputValue || checkBoxValue?"TRUE":"FALSE";
    } else if (selectValue === "AND") {
      return inputValue && checkBoxValue?"TRUE":"FALSE";
    } else if (selectValue === "NAND") {
      return (1 - (inputValue && checkBoxValue))?"TRUE":"FALSE";
    } else if (selectValue === "NOR") {
      return(1 - (inputValue || checkBoxValue))?"TRUE":"FALSE";
    } else if (selectValue === "XOR") {
      return inputValue ^ checkBoxValue?"TRUE":"FALSE";
    }
  };


  return (
    <div>
      <Select selectHandler={selectHandler} result={setResult} />
      <button onClick={setResult}>Submit</button>
      <br></br>
      <span>Salida: {selectValue}</span>
    </div>
  );
};

export default LogicGate;
