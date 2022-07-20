import React, { useState } from 'react'

const InputHandler = () => {
    const [inputArray, setInputArray] = useState("");
    
    const inputHandler = (e) => {
        if (inputArray === ' ' || inputArray === null ) {
            return ( <p>Ingrese un input valido</p>);
        }
        else {
            setInputArray(e.target.value)
        }

    }
    
    //const buttonHandler = (e) => {
     //   setInputArray(e.target.value);
    //}
    
  return (
    <div>
        <input type='text' value= {inputArray} onChange={inputHandler} ></input>
        <button >ok</button>
    </div>
  )
}

export default InputHandler;