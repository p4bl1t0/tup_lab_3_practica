import React from "react";
import Title from "./Title";

const Header = ({ title }) => {
  return (
    <div>
      <Title pTitle={title} />
    </div>
  );
};

export default Header;
