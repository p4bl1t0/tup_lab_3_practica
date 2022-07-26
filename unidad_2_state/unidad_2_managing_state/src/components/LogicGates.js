import { useState } from "react";

export default function LogicGates({ value1, value2 }) {

  const [gateValue, setGateValue] = useState(null);
  const [caseSelected, SetCaseSelected] = useState(null);

  const changeSelectGate = (event) => {
   SetCaseSelected(event.target.value)
  };
  
  const calculateButton = () => {
    switch (caseSelected) {
      case "OR":
        setGateValue(value1 || value2 ? 1 : 0);
        break;
      case "AND":
        setGateValue(value1 && value2 ? 1 : 0);
        break;
      case "NOR":
        setGateValue(value1 || value2 ? 0 : 1);
        break;
      case "NAND":
        setGateValue(value1 && value2 ? 0 : 1);
        break;
      case "XOR":
        setGateValue(value1 !== value2 ? 1 : 0);
        break;
      default:
        setGateValue(null);
        break;
    }
  };

  return (
    <div>
      <label for="selectGate">Compuerta lógica:</label>
      <br />
      <select id="selectGate" onChange={changeSelectGate}>
      <option>Seleccionar</option>
        <option>OR</option>
        <option>AND</option>
        <option>NAND</option>
        <option>NOR</option>
        <option>XOR</option>
      </select>
      <br />
      <button onClick={calculateButton}>calcular</button>
      <div>
        <span>
          Salida:
          <br />
          {gateValue}
        </span>
      </div>
    </div>
  )
};