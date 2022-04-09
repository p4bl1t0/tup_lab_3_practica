import React from "react";
import Title from "./Title";

const Header = ({ pageTitle }) => {
  return (
    <div>
      <Title title={pageTitle.toUpperCase()} />
    </div>
  );
};

export default Header;
