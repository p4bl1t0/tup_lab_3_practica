import React from "react";

const Result = ({ selectValue, value1, value2 }) => {
  const setResult = () => {
    if (selectValue === "OR") {
      return value1 || value2 ? "TRUE" : "FALSE";
    } else if (selectValue === "AND") {
      return value1 && value2 ? "TRUE" : "FALSE";
    } else if (selectValue === "NAND") {
      return 1 - (value1 && value2) ? "TRUE" : "FALSE";
    } else if (selectValue === "NOR") {
      return 1 - (value1 || value2) ? "TRUE" : "FALSE";
    } else if (selectValue === "XOR") {
      return value1 ^ value2 ? "TRUE" : "FALSE";
    } else {
      return ""
    }
  };
  return (
      <span>Salida: {setResult()}</span>
  );
};

export default Result;
