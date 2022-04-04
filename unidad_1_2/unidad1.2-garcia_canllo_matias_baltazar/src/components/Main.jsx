import React from "react";
import Body from "./Body";

const Main = ({ body, react, practica }) => {
  return (
    <div>
      <Body body={body} />
      <nav>
        <ul>
          <li>
            <a href={practica} target="blank">
              Practica
            </a>
          </li>
          <li>
            <a href={react} target="blank">
              React JS
            </a>
          </li>
        </ul>
      </nav>
      <h3>Gracias javascript</h3>
    </div>
  );
};

export default Main;
