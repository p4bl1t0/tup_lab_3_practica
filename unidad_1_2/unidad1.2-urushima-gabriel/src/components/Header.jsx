import React from "react";

const Header = ({ title }) => {
  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
    </div>
  );
};

export default Header;
