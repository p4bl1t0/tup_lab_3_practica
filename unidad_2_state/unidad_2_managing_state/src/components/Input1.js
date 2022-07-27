import React from 'react'

  const Input1 = ({ input1, setInput1 }) => {
    const handleInput = (event) => {
        Number(event.target.value) === 1
          ? setInput1(Number(event.target.value))
          : setInput1(0);
      };

  return (
    <div>
        <label htmlFor="input1">Entrada 1:</label>
        <input type="number" value={input1} id="input1" onChange={handleInput} />
    </div>
  )
};

export default Input1;