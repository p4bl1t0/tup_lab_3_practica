import React from 'react'

const LogicGates = ({ input1, checkbox, setSelect }) => {
    const handleSelect = (event) => {
        switch (event.target.value) {
          case "and":
            return input1 && checkbox ? setSelect(1) : setSelect(0);
          case "nand":
            return !input1 && !checkbox ? setSelect(1) : setSelect(0);
          case "or":
            return input1 || checkbox ? setSelect(1) : setSelect(0);
          case "nor":
            return !input1 || !checkbox ? setSelect(1) : setSelect(0);
          case "xor":
            return input1 ^ checkbox ? setSelect(1) : setSelect(0);
          default:
            return "Vuelva a ingresar";
        }
      }

  return (
    <div>
      <label htmlFor="selectGate">Compuerta lógica:</label>
      <select id="selectGate" onChange={handleSelect} defaultValue={"DEFAULT"}>
        <option value={"DEFAULT"} disabled>
          Seleccion opcion
        </option>
        <option value="and">And x</option>
        <option value="nand">Nand</option>
        <option value="or">Or +</option>
        <option value="nor">Nor</option>
        <option value="xor">Xor</option>
      </select>
    
    </div>
  )
}

export default LogicGates;