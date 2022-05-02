import { useState } from "react";

function CheckInput({ label, onChange }) {
  const [checkboxValue, setCheckboxValue] = useState(0);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={checkboxValue}
          onChange={(event) => {
            setCheckboxValue(event.target.checked ? 1 : 0);
            if (typeof onChange === "function") {
              onChange(event.target.checked ? 1 : 0);
            }
          }}
        /> { label }
      </label>
    </div>
  );
}

export default CheckInput
