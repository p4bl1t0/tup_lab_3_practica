import React from "react";

const Input = ({ input1, setInput1 }) => {
  const handleInput = (e) => {
    Number(e.target.value) === 1
      ? setInput1(Number(e.target.value))
      : setInput1(0);
  };

  return (
    <div>
      <label htmlFor="input1">Entrada 1:</label>
      <input type="number" value={input1} id="input1" onChange={handleInput} />
    </div>
  );
};

export default Input;
