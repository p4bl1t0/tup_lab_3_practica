import React from "react";

const Page = ({ children }) => {
  return (
    <div>
      <hr />
      {children}
      <hr />
    </div>
  );
};

export default Page;
