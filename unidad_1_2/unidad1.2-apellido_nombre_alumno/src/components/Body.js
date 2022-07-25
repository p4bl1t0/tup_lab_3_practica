import React from "react";

const Body = ({ pageBody }) => {
  return (
    <div
      style={{
        fontStyle: "italic",
        fontWeight: "bold",
        textDecorationLine: "underline",
      }}
    >
      {pageBody}
    </div>
  );
};

export default Body;
