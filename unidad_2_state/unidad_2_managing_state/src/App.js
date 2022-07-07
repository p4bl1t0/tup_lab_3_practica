import { useState } from "react";

import "./App.css";

import LogicGates from "./components/LogicGates";
import NumberInput from "./components/NumberInput";
import CheckInput from "./components/CheckInput";

function App() {
  const [inputNumberValue, setInputNumberValue] = useState("1");
  const [checkboxValue, setCheckboxValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [radioValue, setRadioValue] = useState(0);
  const [logicGateValueOne, setLogicGateValueOne] = useState("");
  const [logicGateValueTwo, setLogicGateValueTwo] = useState("");
  const [logicGateValueThree, setLogicGateValueThree] = useState("");

  const changeInputHandler = (elem) => {
    const value = parseInt(elem.target.value);
    if (value < 0 || value > 1) {
      setInputNumberValue(0);
    } else {
      setInputNumberValue(1);
    }
  };

  const changeCheckboxHandler = (elem) => {
    if (elem.target.checked) {
      setCheckboxValue(1);
    } else {
      setCheckboxValue(0);
    }
  };

  const changeRangeHandler = (e) => {
    setRangeValue(e.target.value);
    if (Number(e.target) >= 50) {
      setRangeValue(1);
    } else {
      setRangeValue(0);
    }
  };

  return (
    <div className="App">
      <h3>Compuerta 1</h3>
      <NumberInput
        inputHandler={changeInputHandler}
        inputValue={inputNumberValue}
      />
      <CheckInput
        checkboxHandler={changeCheckboxHandler}
        checkboxValue={checkboxValue}
      />
      <LogicGates
        className="gateOne"
        valueOne={inputNumberValue}
        valueTwo={checkboxValue}
        setLogicGate={setLogicGateValueOne}
        logicGate={logicGateValueOne}
      />
      <br></br>
      <hr></hr>
      <div>
        <h3>Compuerta 2</h3>
        <input type="range" onChange={(e) => changeRangeHandler(e)} />
        <label>
          <input type="radio" name="1" onClick={() => setRadioValue(0)} />0
        </label>
        <label>
          <input type="radio" name="1" onClick={() => setRadioValue(1)} />1
        </label>
      </div>
      <LogicGates
        id="gateTwo"
        valueOne={rangeValue}
        valueTwo={radioValue}
        setLogicGate={setLogicGateValueTwo}
        logicGate={logicGateValueTwo}
      />
      <br></br>
      <hr></hr>
      <div>
        <h3>Compuerta 3</h3>
        <LogicGates
          id="gateThree"
          valueOne={logicGateValueOne}
          valueTwo={logicGateValueTwo}
          setLogicGate={setLogicGateValueThree}
          logicGate={logicGateValueThree}
        />
      </div>
    </div>
  );
}

export default App;
