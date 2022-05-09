import "./App.css";
import { useEffect, useState } from "react";
import { randomNumber } from "./lib/functions";
import LogicGates from "./components/LogicGates";
import LogicInput from "./components/LogicInput";
import LogicCheckBox from "./components/LogicCheckBox";
import LogicRange from "./components/LogicRange";
import LogicRadio from "./components/LogicRadio";

function App() {
  const [inputValue, setInputValue] = useState(randomNumber());
  const [cbxValue, setCbxValue] = useState(false);
  const [logic1, setLogic1] = useState("");
  const [rangeValue, setRangeValue] = useState("0");
  const [radioValue, setRadioValue] = useState("0");
  const [logic2, setLogic2] = useState("");

  const inputChangeHandler = (value) => {
    setInputValue(value === "1");
  };

  const cbxChangeHandler = () => {
    setCbxValue(!cbxValue);
  };

  const logic1ValueHandler = (value) => {
    setLogic1(value);
  };

  const rangeChangeHandler = (value) => {
    setRangeValue(value);
  };

  const radioChangeHandler = (value) => {
    setRadioValue(value);
  };

  const logic2ValueHandler = (value) => {
    setLogic2(value);
  };

  return (
    <div className="App">
      <div className="logic-box">
        <div>
          <LogicInput
            label="Entrada 1:"
            value={inputValue}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <LogicCheckBox
            label="Entrada 2: "
            value={cbxValue}
            onChange={cbxChangeHandler}
          />
        </div>
        <div>
          <LogicGates
            label={"Compuerta lógica 1: "}
            onChange={logic1ValueHandler}
            value1={inputValue}
            value2={cbxValue}
          />
        </div>
      </div>
      <div className="logic-box">
        <LogicRange
          label={"Entrada 1: "}
          value={rangeValue}
          onChange={rangeChangeHandler}
        />
        <LogicRadio
          label={"Entrada 2: "}
          value={radioValue}
          onChange={radioChangeHandler}
        />
        <LogicGates
          label={"Compuerta lógica 2: "}
          onChange={logic2ValueHandler}
          value1={rangeValue}
          value2={radioValue}
        />
      </div>
      <div className="logic-box">
        <LogicGates
          label={"Compuerta lógica 3: "}
          value1={logic1}
          value2={logic2}
        />
      </div>
    </div>
  );
}

export default App;
