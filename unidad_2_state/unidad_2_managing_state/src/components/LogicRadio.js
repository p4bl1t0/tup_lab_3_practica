import React from "react";
import { useState } from "react";

const LogicRadio = ({ label, value, onChange }) => {
  const [radioInput, setRadioInput] = useState(value || "0");
  return (
    <div>
      <label>
        {label}
        <br />
        <label>0</label>
        <input
          type="radio"
          label="0"
          name="logicRadio"
          value="0"
          checked={radioInput === "0"}
          onChange={(e) => {
            setRadioInput(e.target.value);
            if (typeof onChange === "function") {
              onChange(e.target.value);
            }
          }}
        />
        <label>1</label>
        <input
          type="radio"
          label="1"
          name="logicRadio"
          value="1"
          checked={radioInput === "1"}
          onChange={(e) => {
            setRadioInput(e.target.value);
            if (typeof onChange === "function") {
              onChange(e.target.value);
            }
          }}
        />
      </label>
    </div>
  );
};

export default LogicRadio;
