import React from "react";
import "./Page.css";

const Page = ({ children}) => {
  console.log(children);
  return (
    <div className="page-class">
        {children}
    </div>
  );
};

export default Page;
