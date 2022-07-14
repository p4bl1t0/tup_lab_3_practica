export default function LogicGates({ value1, value2, setGateValue }) {
  
  const changeSelectGate = (event) => {
    switch (event.target.value) {
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
        break;
    }
  };

  return (
    <div>
      <label for="selectGate">Compuerta lógica:</label>
      <select id="selectGate" onChange={changeSelectGate}>
        <option>OR</option>
        <option>AND</option>
        <option>NAND</option>
        <option>NOR</option>
        <option>XOR</option>
      </select>
    </div>
  );
}
