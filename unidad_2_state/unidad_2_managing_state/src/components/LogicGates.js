import React from "react";
import { useState, useEffect } from "react";
import { logic } from "../lib/functions";

const Logic = ({ label, value1, value2, onChange }) => {
  const [selectValue, setSelectValue] = useState("OR");

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const [resultValue, setResultValue] = useState(
    logic(value1, value2, selectValue)
  );

  useEffect(() => {
    setResultValue(logic(value1, value2, selectValue));
    if (typeof onChange === "function") {
      onChange(resultValue);
    }
  }, [value1, value2, selectValue]);

  return (
    <>
      <div>
        <label htmlFor="selectGate">{label}</label>
        <br />
        <select
          id="selectGate"
          value={selectValue}
          onChange={(e) => {
            handleSelectChange(e);
          }}
        >
          <option value="OR">OR</option>
          <option value="AND">AND</option>
          <option value="NAND">NAND</option>
          <option value="NOR">NOR</option>
          <option value="XOR">XOR</option>
          <option value="XNOR">XNOR</option>
        </select>
      </div>
      <div>
        <span>Salida:{logic(value1, value2, selectValue)}</span>
        <br />
        <span>Salida2 : {resultValue}</span>
      </div>
    </>
  );
};

export default Logic;
