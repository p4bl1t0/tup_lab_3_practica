import React from "react";
import Body from "./Body";

const Main = ({ pageBody, extLinks }) => {
  return (
    <div>
      <Body pageBody={pageBody} />
      <nav>
        <ul>
          <li>
            <a
              href={extLinks[0]}
              target="_blank"
              rel="noreferrer"
            >
              Practica
            </a>
          </li>
          <li>
            <a
              href={extLinks[1]}
              target="_blank"
              rel="noreferrer"
            >
              Lucas Gh profile
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Main;
