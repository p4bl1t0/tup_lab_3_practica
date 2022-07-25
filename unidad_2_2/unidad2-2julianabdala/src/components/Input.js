import React from "react";

const Input = ({ inputText, setInputText, array, setArray }) => {
  const InputHandler = (event) => {
    setInputText(event.target.value);
  };

  const ClickHandler = () => {
    inputText !== "" ? setArray([...array, inputText]) : setInputText("");
  };

  return (
    <div>
      <div>
        <input type="text" onChange={InputHandler} value={inputText} />
      </div>
      <div>
        <button onClick={ClickHandler}>Aceptar</button>
      </div>
    </div>
  );
};

export default Input;
