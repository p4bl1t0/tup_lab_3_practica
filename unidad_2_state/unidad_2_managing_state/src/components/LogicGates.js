import React from "react";

import { useState } from "react";

import Select from "./Select";

import Result from "./Result";

const LogicGates = ({ value1, value2}) => {
  const [selectValue, setSelectValue] = useState("DEFAULT");
  const selectHandler = (elem) => {
    setSelectValue(elem.target.value);
  };

  return (
    <div>
      <Select selectHandler={selectHandler} />
      <div>
        <Result
          selectValue={selectValue}
          value1={value1}
          value2={value2}
        />
      </div>
    </div>
  );
};

export default LogicGates;
