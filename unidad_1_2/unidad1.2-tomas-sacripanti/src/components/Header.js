import React from "react";
import Title from "./Title.js";

const Header = ({ pageTitle }) => {
  return (
    <div className="header">
      <Title title={pageTitle}></Title>
    </div>
  );
};

export default Header;
