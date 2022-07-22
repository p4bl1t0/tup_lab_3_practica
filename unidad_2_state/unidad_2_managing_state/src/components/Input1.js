import React from 'react'

const Input1 = ({inputHandler, inputValue} ) => {
  return (
    <div>
        <label htmlFor="input1">Entrada 1:</label>
        <input
          type="number"
          id="input1"
          value={inputValue}
          onChange={inputHandler}
        />
      </div>
  )
}

export default Input1