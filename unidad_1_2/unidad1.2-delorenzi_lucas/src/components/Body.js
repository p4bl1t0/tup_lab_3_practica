import React from "react";

const Body = ({ body, className }) => {
  return (
    <div className={className}>
      <p>{body}</p>
    </div>
  );
};

export default Body;
