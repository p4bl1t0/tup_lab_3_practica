import React from "react";
import Body from "./Body.js";

const Main = ({ linkOne, linkTwo, pageBody }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href={linkOne}>Link 1</a>
          </li>
          <li>
            <a href={linkTwo}>Link 2</a>
          </li>
        </ul>
      </nav>
      <Body pageBody={pageBody}></Body>
    </div>
  );
};

export default Main;
