import React from "react";
import Body from "./Body";

const Main = ({ pageBody }) => {
  return (
    <div>
      <Body pageBody={pageBody} />
      <nav>
        <ul>
          <li>
            <a
              href="https://github.com/Ignacioff56/tup_lab_3_practica/tree/main/unidad_1_2"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Repositorio de Github.
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              Youtube
            </a>
          </li>
        </ul>
      </nav>
      <p>Ignacio Fernandez Faustino</p>
    </div>
  );
};

export default Main;
