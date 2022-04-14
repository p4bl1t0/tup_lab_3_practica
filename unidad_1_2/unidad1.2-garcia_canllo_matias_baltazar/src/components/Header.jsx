import React from "react";
import Title from "./Title";

const Header = ({ title }) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#93c4f1",
        borderBottom: "solid",
      }}
    >
      <Title title={title.toUpperCase()} />
    </div>
  );
};

export default Header;
