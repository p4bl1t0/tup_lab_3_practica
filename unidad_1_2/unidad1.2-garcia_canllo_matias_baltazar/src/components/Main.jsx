import React from "react";
import BlogPost from "./BlogPost";
import Body from "./Body";

const Main = ({ body, react, practica }) => {
  return (
    <div>
      <Body body={body.toUpperCase()} estilo="italic" />
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
      <BlogPost />
    </div>
  );
};

export default Main;
