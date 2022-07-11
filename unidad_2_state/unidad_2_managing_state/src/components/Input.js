import React from "react";

const Input = ({ type, value, onChange, id, text }) => {
  const inputChangeHandler = (e) => {
    if (type === "number") {
      const intValue = parseInt(e.target.value);
      if (intValue === 1) {
        onChange(1);
      } else {
        onChange(0);
      }
    } else if (type === "checkbox") {
      if (e.target.checked) {
        onChange(1);
      } else {
        onChange(0);
      }
    } else if (type === "range") {
      onChange(parseInt(e.target.value));
    } else {
      if (e.target.checked) {
        onChange(1);
      } else {
        onChange(0);
      }
    }
  };
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
