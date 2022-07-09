import React from "react";
import { useState } from "react";

const Select = ({ input1, checkbox, setSelect }) => {
  const handleSelect = (event) => {
    switch (event.target.value) {
      case "And":
        input1 && checkbox ? setSelect(1) : setSelect(0);
      case "Nand":
        !input1 && !checkbox ? setSelect(1) : setSelect(0);
      case "Or":
        input1 || checkbox ? setSelect(1) : setSelect(0);
      case "Nor":
        !input1 || !checkbox ? setSelect(1) : setSelect(0);
      case "Xor":
        input1 ^ checkbox ? setSelect(1) : setSelect(0);
    }
  };

  return (
    <div>
      <label htmlFor="selectGate">Compuerta lógica:</label>
      <select id="selectGate" onChange={handleSelect}>
        <option value="And">And x</option>
        <option value="Nand">Nand</option>
        <option value="Or">Or +</option>
        <option value="Nor">Nor</option>
        <option value="Xor">Xor</option>
      </select>
    </div>
  );
};

export default Select;
