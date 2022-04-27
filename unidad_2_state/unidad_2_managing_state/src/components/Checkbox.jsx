import React from "react";

const Checkbox = ({ checked1, setChecked1 }) => {
  const handleChangeCheckbox = () => {
    checked1 ? setChecked1(0) : setChecked1(1);
  };
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleChangeCheckbox} /> Entrada 2
      </label>
    </div>
  );
};

export default Checkbox;
