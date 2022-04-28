import React from "react";
import { useState } from "react";

export const LogicCheckBox = ({ label, onChange }) => {
  const [cbxInput, setCbxInput] = useState(false);
  const handleChange = () => {
    setCbxInput(!cbxInput);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={cbxInput} onChange={handleChange} />{" "}
        {label}
      </label>
    </div>
  );
};
