import React from "react";
import "./Page.css";

const Page = ({ children }) => {
  return (
    <div className="Page">
      <hr />
      {children}
      <hr />
    </div>
  );
};

export default Page;
