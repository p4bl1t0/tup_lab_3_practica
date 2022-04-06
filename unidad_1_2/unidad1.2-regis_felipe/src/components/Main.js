import React from "react";
import Body from "./Body";

const Main = ({ pageBody, practica, js }) => {
  return (
    <div>
      <Body pageBody={pageBody} />
      <nav>
        <ul>
          <li>
            <a href={practica} target="_blank" rel="noreferrer" >
              Practica
            </a>
          </li>
          <li>
            <a href={js} target="_blank" rel="noreferrer">
              Javascript
            </a>
          </li>
        </ul>
      </nav>
      <h2>Aprendiendo Javascript moderno</h2>
    </div>
  );
};

export default Main;
