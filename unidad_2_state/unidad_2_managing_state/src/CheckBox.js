import React from "react";
import { useState } from "react";

const CheckBox = ({ onInputCheckSaved }) => {
  const [checkboxStatus, setCheckBoxStatus] = useState(0);
  const inputCheckHandler = (event) => {
    event.target.checked ? setCheckBoxStatus(1) : setCheckBoxStatus(0);
  };
  onInputCheckSaved(checkboxStatus);
  return (
    <div>
      <label>Entrada 2: </label>
      <input
        type="checkbox"
        value={checkboxStatus}
        onChange={inputCheckHandler}
      />
    </div>
  );
};

export default CheckBox;
