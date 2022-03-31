import React from "react";
import Title from "./Title.js";

const Header = ({ pageTitle }) => {
  return (
    <div>
      <Title pageTitle={pageTitle}></Title>
    </div>
  );
};

export default Header;
