import React from "react";
import Title from "./Title";

const Header = ({ title }) => {
  return (
    <div>
      <Title title={title.toUpperCase()} />
    </div>
  );
};

export default Header;
