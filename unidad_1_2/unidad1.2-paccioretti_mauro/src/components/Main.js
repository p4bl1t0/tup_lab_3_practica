import React from "react";
import Body from "./Body";

const Main = ({ pageBody, enlace1, enlace2 }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a target="_blank" href={enlace1} rel="noreferrer">
              enlace1
            </a>
          </li>
          <li>
            <a target="_blank" href={enlace2} rel="noreferrer">
              enlace2
            </a>
          </li>
        </ul>
      </nav>
      <Body body={pageBody} />
    </div>
  );
};

export default Main;
