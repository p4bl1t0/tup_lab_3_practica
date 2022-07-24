import { useState } from "react";

const LogicGates = ({ valueOne, valueTwo, setGateValue, gateValue }) => {
  const [selectInput, setSelectInput] = useState("");
  
  const selectChangeHandler = (e) => {
    setSelectInput(e.target.value);
  };
  
  const gateResult = () => {
    switch (selectInput) {
      case "and":
        setGateValue(valueOne && valueTwo ? 1 : 0);
        break;
      case "or":
        setGateValue(valueOne || valueTwo ? 1 : 0);
        break;
      case "xor":
        setGateValue(valueOne !== valueTwo ? 1 : 0);
        break;
      case "nand":
        setGateValue(!(valueOne && valueTwo) ? 1 : 0);
        break;
      case "nor":
        setGateValue(!(valueOne || valueTwo) ? 1 : 0);
        break;
      default:
        return "Seleccione una compuerta lógica";
    }
  };

  return (
    <div>
      <label htmlFor="gateResult">Compuerta lógica:</label>
      <select id="gateResult" onChange={selectChangeHandler}>
        <option value="or">OR</option>
        <option value="and">AND</option>
        <option value="nand">NAND</option>
        <option value="nor">NOR</option>
        <option value="xor">XOR</option>
      </select>
      <div>
        <button onClick={gateResult}>Calcular compuerta</button>
        <br></br>
        <span>
          Salida: {gateValue}
        </span>
      </div>
    </div>
  );
};

export default LogicGates;