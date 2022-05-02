import React from "react";

const CheckBox1 = ({ checkBox1, setCheckBox1 }) => {
  const changeCheckBox = (event) => {
    //console.log(event.target.value);
    setCheckBox1((event.target.value = 1));
  };
  return (
    <div>
      <label>Entrada 2</label>
      <input type="checkbox" value={checkBox1} onChange={changeCheckBox} />{" "}
    </div>
  );
};

export default CheckBox1;
