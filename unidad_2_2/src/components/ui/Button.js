import React from "react";

const Button = ({ text, classes }) => {
  return (
    <button className={classes} type="submit">
      {text}
    </button>
  );
};

export default Button;
