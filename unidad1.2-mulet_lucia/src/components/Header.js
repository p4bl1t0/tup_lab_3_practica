import React from "react";
import Title from "./Title";

const Header = ({ pageTitle }) => {
  return (
    <div>
      <h1>
        <Title pageTitle={pageTitle} />
        <Title title={title} />
        <Title titleNews={titleNews} />
      </h1>
    </div>
  );
};

export default Header;
