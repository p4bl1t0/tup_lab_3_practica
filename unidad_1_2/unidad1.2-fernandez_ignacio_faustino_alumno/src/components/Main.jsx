import React from "react";
import Body from "./Body";
import Blogpost from "./Blogpost";
import "./Main.css";

const Main = ({ PageBody }) => {
  return (
    <div className="Main">
      <div className="Main_text">
        <Body body={PageBody} />
      </div>
      <Blogpost />
      <nav>
        <ul className="List">
          <li>
            <a
              href="https://github.com/Ignacioff56/tup_lab_3_practica/tree/main/unidad_1_2"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Repositorio de Github
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
