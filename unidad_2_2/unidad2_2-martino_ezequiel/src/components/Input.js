import React from "react";

const Input = ({
  inputValue,
  inputHandler,
  clickHandler,
  editing,
  inputFocus,
}) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={inputHandler}
        ref={inputFocus}
      ></input>
      <button type="submit" onClick={clickHandler}>
        {editing ? "Editar" : "Agregar"}
      </button>
    </div>
  );
};

export default Input;
