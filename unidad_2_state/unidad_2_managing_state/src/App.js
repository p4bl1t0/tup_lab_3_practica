import { useState } from "react";
import "./App.css";
import LogicGates from "./components/LogicGates";
import Input1 from "./components/Input1";
import CheckBox from "./components/Checkbox";

const App = () => {
  const randomNum = () => Math.round(Math.random());
  const [inputValue, setInputValue] = useState(randomNum());

  const [checked, setChecked] = useState(false);
  const [inputRadio, setInputRadio] = useState("0");
  const [inputRange, setInputRange] = useState("0");
  const [firstDoor, setFirstDoor] = useState(0);
  const [secondDoor, setSecondDoor] = useState(0);

  const changeInputValue = (event) => {
    setInputValue(event.target.value === "1" ? 1 : 0);
  };

  const handleCheckBox = () => {
    setChecked(!checked);
  };

  const handleRadioInput = (e) => {
    setInputRadio(e.target.value === "1" ? 1 : 0);
  };

  const handleRangeInput = (e) => {
    setInputRange(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <h4>1</h4>
        <div>
          <Input1 inputValue={inputValue}changeInputValue={changeInputValue}
          />
        </div>
        <div>
          <CheckBox checked={checked} handleCheckBox={handleCheckBox} />
        </div>
        <br></br>
        <LogicGates input1={inputValue} input2={checked} value={firstDoor} onOutputChange={setFirstDoor} />
      </div>
      <br></br>
      <br></br>

      <div>
        <h4>2</h4>
        <input type="range" min="0" max="1" value={inputRange} onChange={handleRangeInput} ></input>
        <br></br>

        <label htmlFor="0">0</label>
        <input type="radio" name="radio-input" value="0" onChange={handleRadioInput} ></input>
        <br></br>

        <div>
          <label htmlFor="1">1</label>
          <input type="radio" name="radio-input" value="1"onChange={handleRadioInput}></input>
        </div>
        <br></br>
        <LogicGates input1={inputRadio} input2={inputRange} onOutputChange={setSecondDoor} value={secondDoor}
        />
      </div>

      <br></br>
      <br></br>

      <div>
        <h4>Cálculo 1 y 2</h4>
        <LogicGates input1={firstDoor} input2={secondDoor} />
      </div>
    </div>
  );
};

export default App;