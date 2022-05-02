import React from "react";

const Input1 = ({ input1, setInput1 }) => {
  const changeInputValue = (event) => {
    //console.log(event.target.value);
    setInput1(event.target.value == 1 ? 1 : 0);
  };
  return (
    <div>
      <label for="input1">Entrada 1:</label>
      <input
        type="number"
        id="input1"
        value={input1}
        onChange={changeInputValue}
      />
    </div>
  );
};

export default Input1;
