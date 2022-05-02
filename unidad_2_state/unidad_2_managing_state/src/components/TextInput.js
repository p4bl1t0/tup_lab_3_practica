import { useState } from "react";

function TextInput({ label, onChange }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <label for="input1">{label}</label>
      <input
        type="number"
        id="input1"
        min="0"
        max="1"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value === "1" ? 1 : 0);
          if (typeof onChange === "function") {
            onchange(event.target.value === "1" ? 1 : 0);
          }
        }}
      />
    </div>
  );
}

export default TextInput;
