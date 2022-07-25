import "./App.css";
import { useState } from "react";
import CheckBox from "./components/CheckBox";
import Input from "./components/Input";
import LogicGates from "./components/LogicGates";
function App() {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [value, setValue] = useState();

  return (
    <div className="App">
      <div>
        <Input input1={input1} setInput1={setInput1} />
      </div>
      <div>
        <CheckBox input2={input2} setInput2={setInput2} />
      </div>
      <div>
        <LogicGates input1={input1} input2={input2} setValue={setValue} />
      </div>
      <div>
        <span>Salida: {value}</span>
      </div>
    </div>
  );
}
export default App;
