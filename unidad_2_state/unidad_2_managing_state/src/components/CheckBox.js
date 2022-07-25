import React from "react";

const Checkbox = ({ setInput2 }) => {
  const input2Handler = (event) => {
    event.target.checked ? setInput2(1) : setInput2(0);
  };
  return (
    <div>
      <label>
        <input type="checkbox" onChange={input2Handler} /> Entrada 2
      </label>
    </div>
  );
};

export default Checkbox;
