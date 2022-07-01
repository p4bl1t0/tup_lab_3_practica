import React, { useEffect } from "react";
import { useState } from "react";

const LogicGates = ({ input1, input2, onSavedResult }) => {
  const [selectValue, setSelectValue] = useState("OR");
  const getSelect = (event) => {
    setSelectValue(event.target.value);
  };

  const changeResult = () => {
    let result;
    switch (selectValue) {
      case "OR":
        input1 || input2 ? (result = "1") : (result = "0");
        return result;
      case "AND":
        input1 && input2 ? (result = "1") : (result = "0");
        return result;
      case "NAND":
        !input1 && !input2 ? (result = "1") : (result = "0");
        return result;
      case "NOR":
        !input1 || !input2 ? (result = "1") : (result = "0");
        return result;
      case "XOR":
        input1 !== input2 ? (result = "1") : (result = "0");
        return result;
    }
  };
  useEffect(() => {
    if (typeof onSavedResult === "function") onSavedResult(changeResult());
  }, [input1, input2, selectValue]);

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
        <span>Salida: {changeResult()}</span>
      </div>
    </div>
  );
};
export default LogicGates;
