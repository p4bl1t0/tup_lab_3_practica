import { useState } from "react";

export default function LogicGates({ value1, value2 }) {
  const [resultLogicGate, setResultLogicGate] = useState(null);
  const [gateValue, setGateValue] = useState(resultLogicGate);

  const changeSelectGate = (event) => {
    switch (event.target.value) {
      case "OR":
        setResultLogicGate(value1 || value2 ? 1 : 0);
        break;
      case "AND":
        setResultLogicGate(value1 && value2 ? 1 : 0);
        break;
      case "NOR":
        setResultLogicGate(value1 || value2 ? 0 : 1);
        break;
      case "NAND":
        setResultLogicGate(value1 && value2 ? 0 : 1);
        break;
      case "XOR":
        setResultLogicGate(value1 !== value2 ? 1 : 0);
        break;
      default:
        setResultLogicGate(null);
        break;
    }
  };

  const calculateButton = () => {
    setGateValue(resultLogicGate);
  };

  return (
    <div>
      <label for="selectGate">Compuerta lógica:</label>
      <br />
      <select id="selectGate" onClick={changeSelectGate}>
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
  );
}
