import React, { useState } from "react";

const Input1 = ({ inputOne, setInputOne }) => {
  const handleChangeInput = (e) => {
    Number(e.target.value) === 1
      ? setInputOne(Number(e.target.value))
      : setInputOne(0);
  };

  return (
    <div>
      <label htmlFor="input1">Entrada 1:</label>
      <input
        type="number"
        id="input1"
        onChange={handleChangeInput}
        value={inputOne}
      />
    </div>
  );
};

export default Input1;
