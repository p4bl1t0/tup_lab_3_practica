import React from "react";
import Body from "./Body";

const Main = ({ pageBody, link1, link2 }) => {
  return (
    <div>
      <nav>
        <p>Estos links son re facheros B-)</p>
        <ul>
          <li>
            <a href={link1}> Link1 </a>
          </li>
          <li>
            <a href={link2}> Link2</a>
          </li>
        </ul>
      </nav>
      <div>
        <Body pageBody={pageBody} />
      </div>
    </div>
  );
};

export default Main;
