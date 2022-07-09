import React from "react";

const LogicGates = () => {
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
};

export default LogicGates;
