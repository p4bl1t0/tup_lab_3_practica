import React from "react";
import { useState } from "react";

const Input1 = ({ onInput1Saved }) => {
  const [input1, setInputValue] = useState(0);
  const changeInputHandler = (event) => {
    parseInt(event.target.value) ? setInputValue(1) : setInputValue(0);
  };
  onInput1Saved(input1);
  return (
    <div>
      <label>Entrada 1:</label>
      <input
        type="number"
        id="input1"
        value={input1}
        onChange={changeInputHandler}
      />
      ;
    </div>
  );
};

export default Input1;
