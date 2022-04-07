import React from "react";
import Body from "./Body";

const Main = ({ body, links }) => {
  return (
    <div>
      <nav>
        <p>Estos links son re facheros B-)</p>
        <ul>
          <li>
            <a href={links[0]}>{links[0]}</a>
          </li>
          <li>
            <a href={links[1]}>{links[1]}</a>
          </li>
        </ul>
      </nav>
      <div>
        <Body pageBody={body} />
      </div>
    </div>
  );
};

export default Main;
