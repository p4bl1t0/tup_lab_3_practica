import { useState } from "react";
import { validate } from "../lib/functions";

const LogicInput = ({ label, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div>
      <label htmlFor="input1"> {label} </label>
      <br />
      <input
        type="number"
        id="input1"
        min="0"
        max="1"
        value={inputValue}
        onChange={(e) => {
          setInputValue(validate(e.target.value));
          if (typeof onChange === "function") {
            onChange(e.target.value);
          }
        }}
      />
    </div>
  );
};

export default LogicInput;
