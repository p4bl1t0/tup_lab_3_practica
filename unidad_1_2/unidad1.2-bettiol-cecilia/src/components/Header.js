import React from "react";
import Title from "./Title";
import './Header.css'

const Header = ({ pageTitle }) => {
  return (
    <div className="header-title">
      <Title title={pageTitle} />
    </div>
  );
};

export default Header;
