import React from "react";
import Body from "./Body";

const Main = ({ body, link1, link2 }) => {
  return (
    <div>
      <Body pBody={body} />
      <nav>
        <h3>MENU</h3>
      </nav>
      <ul>
        <a href={link1}>Infobae</a>
      </ul>
      <ul>
        <a href={link2}>Rosario 3</a>
      </ul>
      <p>La pelota no se mancha</p>
    </div>
  );
};

export default Main;
