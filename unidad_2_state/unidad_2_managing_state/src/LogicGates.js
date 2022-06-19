import React from "react";
import { useState } from "react";

const LogicGates = ({ input1, input2 }) => {
  const [selectValue, setSelectValue] = useState("OR");
  const getSelect = (event) => {
    setSelectValue(event.target.value);
  };
  // const [finalResult, setFinalResult] = useState("0");

  let result;
  const changeResult = (value1, value2, option) => {
    switch (option) {
      case "OR":
        value1 || value2 ? (result = "1") : (result = "0");
        return result;
      case "AND":
        value1 && value2 ? (result = "1") : (result = "0");
        return result;
      case "NAND":
        !value1 && !value2 ? (result = "1") : (result = "0");
        return result;
      case "NOR":
        !value1 || !value2 ? (result = "1") : (result = "0");
        return result;
      case "XOR":
        value1 !== value2 ? (result = "1") : (result = "0");
        return result;
    }
  };
  // const handleResult = () => {
  //   changeResult(input1, input2, selectValue);
  //   console.log("resultado final:", finalResult);
  //   onSavedResult(finalResult);
  //   return finalResult.toString;
  // };
  return (
    <div className="LogicGates">
      <div>
        <label>Compuerta lógica: </label>
        <select onChange={getSelect} value={selectValue}>
          <option value="OR">OR</option>
          <option value="AND">AND</option>
          <option value="NAND">NAND</option>
          <option value="NOR">NOR</option>
          <option value="XOR">XOR</option>
        </select>
      </div>
      <div>
        <span>Salida: {changeResult(input1, input2, selectValue)}</span>
        {/* <span>Salida: {handleResult}</span> */}
      </div>
    </div>
  );
};
export default LogicGates;
