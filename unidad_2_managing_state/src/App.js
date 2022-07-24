import { useState } from "react";
import "./App.css";
import CheckBox from "./components/CheckBox";
import Input1 from "./components/Input1";
import LogicGates from "./components/LogicGates";

const App = () => {
  const [input1Value, setInput1Value] = useState(Math.round(Math.random()));
  const [checkboxInput, setCheckboxInput] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [radioValue, setRadioValue] = useState(0);
  const [logicGateValueOne, setLogicGateValueOne] = useState("");
  const [logicGateValueTwo, setLogicGateValueTwo] = useState("");
  const [logicGateValueThree, setLogicGateValueThree] = useState("");

  const inputHandler = (e) => {
    setInput1Value(e.target.value === '1' ? 1 : 0);
  };

  const checkboxHandler = (e) => {
    setCheckboxInput(e.target.checked ? 1 : 0);
  };

  const RangeHandler = (e) => {
    setRangeValue(e.target.value >= 50 ? 1 : 0);
  };


  return (
    <div className="App">
      <h2>Compuerta 1</h2>
      <Input1 input1Value={input1Value} inputHandler={inputHandler}/>
      <CheckBox checkboxInput={checkboxInput} checkboxHandler={checkboxHandler}/>
      <div>
        <LogicGates id="gate-one"valueOne={input1Value} valueTwo={checkboxInput} 
        setGateValue={setLogicGateValueOne} gateValue={logicGateValueOne}/>
      </div>
      <div>
        <h2>Compuerta 2</h2>
        <input type="range" onChange={(e) => RangeHandler(e)} />
        <input type="radio" name="radios" onClick={() => setRadioValue(0)} />
        <input type="radio" name="radios" onClick={() => setRadioValue(1)} />
      </div>
      <LogicGates id="gate-two" valueOne={rangeValue} valueTwo={radioValue}
        setGateValue={setLogicGateValueTwo} gateValue={logicGateValueTwo}
      />
      <div>
        <h2>Compuerta 3</h2>
        <LogicGates id="gate-three" valueOne={logicGateValueOne} valueTwo={logicGateValueTwo}
        setGateValue={setLogicGateValueThree} gateValue={logicGateValueThree}
      />
      </div>
    </div>
  );
}

export default App;
