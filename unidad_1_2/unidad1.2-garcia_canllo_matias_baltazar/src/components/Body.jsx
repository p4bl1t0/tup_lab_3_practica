import React from "react";

const Body = ({ body, estilo = "normal" }) => {
  return <div style={{ fontStyle: estilo }}>{body}</div>;
};

export default Body;
