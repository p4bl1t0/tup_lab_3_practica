import React from "react";
import "./Header.css";

import Title from "./Title";

const Header = ({ PageTitle }) => {
  return (
    <div className="Header_title">
      <Title title={PageTitle} />
    </div>
  );
};

export default Header;
