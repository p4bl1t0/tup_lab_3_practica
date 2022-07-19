import React from "react";

const Checkbox = ({ checkbox, setCheckbox }) => {
  const handleCheckbox = () => {
    checkbox ? setCheckbox(0) : setCheckbox(1);
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleCheckbox} />
        Entrada 2
      </label>
    </div>
  );
};

export default Checkbox;
