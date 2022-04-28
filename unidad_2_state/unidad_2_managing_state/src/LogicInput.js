import { useState } from "react";
import { validate, randomNumber } from "./lib/functions";
const LogicInput = ({ label, onChange }) => {
  const [inputValue, setInputValue] = useState(randomNumber());
  return (
    <div>
      <label for="input1"> {label} </label>
      <input
        type="number"
        id="input1"
        min="0"
        max="1"
        value={inputValue}
        onChange={(e) => {
          setInputValue(validate(e.target.value));
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default LogicInput;
