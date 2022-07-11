import { useState, useEffect } from "react";

const LogicGates = ({ inputOne, inputTwo }) => {
  const [logicGate, setLogicGate] = useState("or");
  const [output, setOutput] = useState(false);

  useEffect(() => {
    switch (logicGate) {
      case "or":
        setOutput(inputOne || inputTwo);
        break;
      case "and":
        setOutput(inputOne && inputTwo);
        break;
      case "nand":
        setOutput(!(inputOne && inputTwo));
        break;
      case "nor":
        setOutput(!(inputOne || inputTwo));
        break;
      case "xor":
        setOutput(inputOne !== inputTwo);
        break;
      default:
        console.warning("An unexpected error occurred");
        break;
    }
  }, [inputOne, inputTwo, logicGate]);

  const selectChangeHandler = (e) => {
    setLogicGate(e.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="selectGate">Compuerta lógica:</label>
        <select
          onChange={selectChangeHandler}
          id="selectGate"
          value={logicGate}
        >
          <option value="or">Or</option>
          <option value="and">And</option>
          <option value="nand">Nand</option>
          <option value="nor">Nor</option>
          <option value="xor">Xor</option>
        </select>
      </div>
      <div>
        <span>Salida: {output ? "Verdadero" : "Falso"}</span>
      </div>
    </div>
  );
};

export default LogicGates;
