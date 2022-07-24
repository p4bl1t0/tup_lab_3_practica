import React from 'react'

const input1 = ({input1Value, inputHandler}) => {
  return (
    <div>  
        <label for="input1">Entrada 1:</label>
        <input
          value={input1Value}
          type="number"
          id="input1"
          onChange={inputHandler}
        />      
    </div>
  )
}

export default input1