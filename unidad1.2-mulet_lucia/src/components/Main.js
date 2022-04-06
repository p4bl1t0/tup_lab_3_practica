import React from "react";
import Body from "./Body";

const Main = ({ pageBody, link1, link2 }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href={link1}> Link1 </a>
          </li>
          <li>
            <a href={link2}> Link2</a>
          </li>
        </ul>
      </nav>
      <Body pageBody={pageBody} />
      <div>
        <p> Aprendiendo a usar React </p>
      </div>
    </div>
  );
};

export default Main;
