import "./App.css";
import { useState } from "react";
import Input from "./components/Input1";
import Checkbox from "./components/Checkbox";
import LogicGate from "./components/LogicGate";

function App() {
  const [inputValue, setInputValue] = useState("1");
  const [checkBoxValue, setCheckBoxValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [radioValue, setRadioValue] = useState(0);
  const [logicGateValue1, setLogicGateValue1] = useState("");
  const [logicGateValue2, setLogicGateValue2] = useState("");
  const [logicGateValue3, setLogicGateValue3] = useState("");

  const inputHandler = (elem) => {
    const intValue = parseInt(elem.target.value);
    if (intValue < 0 || intValue > 1) {
      setInputValue(0);
    } else {
      setInputValue(1);
    }
  };

  const checkboxHandler = (elem) => {
    if (elem.target.checked) {
      setCheckBoxValue(1);
    } else {
      setCheckBoxValue(0);
    }
  };

  const RangeHandler = (e) => {
    setRangeValue(e.target.value);
    if (Number(e.target) >= 50) {
      setRangeValue(1);
    } else {
      setRangeValue(0);
    }
  };

  return (
    <div className="App">
      <div>
        <h2>Entrada 1:</h2>
        <Input inputHandler={inputHandler} inputValue={inputValue} />
        <Checkbox
          checkboxHandler={checkboxHandler}
          checkBoxValue={checkBoxValue}
        />
        <LogicGate
          className="gate1"
          value1={inputValue}
          value2={checkBoxValue}
          setLogicGateValue={setLogicGateValue1}
          logicGateValue={logicGateValue1}
        />
      </div>
      <div>
        <h2>Entrada 2:</h2>
        <input type="range" onChange={(e) => RangeHandler(e)} />
        <input type="radio" name="radios" onClick={() => setRadioValue(0)} />
        <input type="radio" name="radios" onClick={() => setRadioValue(1)} />
      </div>
      <LogicGate
        id="gate2"
        value1={rangeValue}
        value2={radioValue}
        setLogicGateValue={setLogicGateValue2}
        logicGateValue={logicGateValue2}
      />
      <div>
        <h2>Entrada 3:</h2>
        <LogicGate
          id="gate3"
          value1={logicGateValue1}
          value2={logicGateValue2}
          setLogicGateValue={setLogicGateValue3}
          logicGateValue={logicGateValue3}
        />
      </div>
    </div>
  );
}

export default App;