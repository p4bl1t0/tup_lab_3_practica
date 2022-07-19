import React from "react";

const LogicGates = ({ input1, checkbox, setSelect }) => {
  const handleSelect = (e) => {
    switch (e.target.value) {
      case "and":
        input1 && checkbox ? setSelect(1) : setSelect(0);
      case "nand":
        !input1 && !checkbox ? setSelect(1) : setSelect(0);
      case "or":
        input1 || checkbox ? setSelect(1) : setSelect(0);
      case "nor":
        !input1 || !checkbox ? setSelect(1) : setSelect(0);
      case "xor":
        input1 ^ checkbox ? setSelect(1) : setSelect(0);
    }
  };
  return (
    <div>
      <label htmlFor="selectGate">Compuerta lógica:</label>
      <select id="selectGate" onChange={handleSelect} defaultValue="default">
        <option value="default" disabled>
          Seleccion opcion
        </option>
        <option value="and">And x</option>
        <option value="nand">Nand</option>
        <option value="or">Or +</option>
        <option value="nor">Nor</option>
        <option value="xor">Xor</option>
      </select>
    </div>
  );
};

export default LogicGates;
