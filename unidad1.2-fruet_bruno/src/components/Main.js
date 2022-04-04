import React from "react";
import Body from "./Body";

const Main = ({ body }) => {
  return (
    <div>
      <nav>
        <h3>MENU</h3>
      </nav>
      <ul>
        <li>
          <a href="https://www.infobae.com/">Infobae</a>
        </li>
        <li>
          <a href="https://www.rosario3.com/">Rosario 3</a>
        </li>
      </ul>
      <Body pBody={body} />
    </div>
  );
};

export default Main;
