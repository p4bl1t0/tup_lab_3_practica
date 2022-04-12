import React from "react";
import './Page.css'


const Page = ({ children }) => {
  return (
    <div className="page-div">
      {children}
    </div>
  );
};

export default Page;