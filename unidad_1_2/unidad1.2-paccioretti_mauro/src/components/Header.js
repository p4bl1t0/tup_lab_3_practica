import React from "react";
import Title from "./Title";

const Header = ({ pageTitle }) => {
  return (
    <header>
      <Title title={pageTitle} />
    </header>
  );
};

export default Header;
