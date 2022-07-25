import React from "react";
const Input = ({ setInput1 }) => {
  const input1Handler = (event) => {
    event.target.value === "1" ? setInput1(1) : setInput1(0);
  };
  return (
    <div>
      <label for="input1">Entrada 1:</label>
      <input type="number" id="input1" onChange={input1Handler} />
    </div>
  );
};

export default Input;
