import React from "react";
import Body from "./Body";

const Main = ({ body }) => {
  return (
    <div>
      <Body body={body} />
      <nav>
        <ul>
          <li>
            <a
              href="https://github.com/BaltazarG/tup_lab_3_practica/tree/main/unidad_1_2"
              target="blank"
            >
              Practica
            </a>
          </li>
        </ul>
      </nav>
      <h3>Gracias javascript</h3>
    </div>
  );
};

export default Main;
