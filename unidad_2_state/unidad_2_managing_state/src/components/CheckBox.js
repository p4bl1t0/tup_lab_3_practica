import React from "react";

const CheckBox = ({ checked, handleCheckBox }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="1"
          checked={checked}
          onChange={(e) => handleCheckBox(e)}
        />{" "}
        Entrada 2
      </label>
    </div>
  );
};

export default CheckBox;
