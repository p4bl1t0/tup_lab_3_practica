import React from "react";
import Body from "./Body";

const Main = ({ body }) => {
  return (
    <div>
      <Body pBody={body} />
      <h3>MENU</h3>
      <ul>
        <a href="https://www.infobae.com/">Infobae</a>
      </ul>
      <ul>
        <a href="https://www.rosario3.com/">Rosario 3</a>
      </ul>
      <p>La pelota no se mancha</p>
    </div>
  );
};

export default Main;
