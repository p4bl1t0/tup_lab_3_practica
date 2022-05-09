import React from "react";
import { useState } from "react";

const LogicRange = ({ value, label, onChange }) => {
  const [rangeInput, setRangeInput] = useState(value || 0);

  return (
    <div>
      <label>
        {label}
        <br />
        <input
          type="range"
          min={0}
          max={1}
          step={1}
          value={rangeInput}
          onChange={(e) => {
            setRangeInput(e.target.value);
            if (typeof onChange === "function") {
              onChange(e.target.value);
            }
          }}
        />
      </label>
    </div>
  );
};

export default LogicRange;
