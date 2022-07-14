import React from "react";

const TextInput = ({ inputValue, changeInputValue }) => {
  return (
    <div>
      <div>
        <label htmlFor="input1">Entrada 1:</label>
        <input
          type="number"
          id="input1"
          value={inputValue}
          onChange={(e) => changeInputValue(e)}
        />
      </div>
    </div>
  );
};

export default TextInput;
