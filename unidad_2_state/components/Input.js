import React from "react";

const Input = ({ type, value, onChange, id, text }) => {
  const inputChangeHandler = (event) => {
    if (type === "number") {
      const intValue = parseInt(event.target.value);
      if (intValue === 1) {
        onChange(1);
      } else {
        onChange(0);
      }
    } else if (type === "checkbox") {
      if (event.target.checked) {
        onChange(1);
      } else {
        onChange(0);
      }
    } else if (type === "range") {
      onChange(parseInt(event.target.value));
    } else {
      if (event.target.checked) {
        onChange(1);
      } else {
        onChange(0);
      }
    }
  };

  if (type === "radio") {
    return (
      <div onChange={inputChangeHandler}>
        <label htmlFor="radio1">Verdadero</label>
        <input type={type} value={1} id="radio1" name={id} />
        <label htmlFor="radio2">Falso</label>
        <input type={type} value={0} id="radio2" name={id} />
      </div>
    );
  }
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        value={value}
        onChange={inputChangeHandler}
        id={id}
        min={0}
        max={1}
      />
    </>
  );
};

export default Input;
