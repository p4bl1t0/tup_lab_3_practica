import React from "react";
import { useState } from "react";

const Select = ({ input1, checkbox, setSelect}) => {
  const handleSelect = (event) => {
    switch (event.target.value) {
      case "And":
        input1 && checkbox ? setSelect(1) : setSelect(0);
      case "Nand":
        !input1 && !checkbox ? setSelect(1) : setSelect(0);
      case "Or":
        input1 || checkbox ? setSelect(1) : setSelect(0);
      case "Nor":
        !input1 || !checkbox ? setSelect(1) : setSelect(0);
      case "Xor":
        input1 ^ checkbox ? setSelect(1) : setSelect(0);
    }
  };
};

export default Select;
