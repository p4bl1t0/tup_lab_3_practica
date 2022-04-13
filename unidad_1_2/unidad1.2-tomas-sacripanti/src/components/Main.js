import React from "react";
import Body from "./Body.js";
import BlogPost from "./BlogPost.js";

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
      <Body body={pageBody}></Body>
      <BlogPost
        title="La controvertida tecnología que usa Ucrania para identificar a los muertos y enemigos en la guerra"
        body="El mes pasado, una polémica empresa de reconocimiento facial, Clearview AI, anunció que había entregado su tecnología al gobierno ucraniano. La BBC tuvo acceso a evidencia de cómo se está utilizando en más de mil casos para identificar a personas vivas o muertas."
      ></BlogPost>
      <div>
        <p>Esta es una frase creada por Tomás Sacripanti</p>
      </div>
    </div>
  );
};

export default Main;
