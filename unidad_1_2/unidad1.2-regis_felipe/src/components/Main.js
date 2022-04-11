import React from "react";
import BlogPost from "./BlogPost";
import Body from "./Body";

import "./Main.css";

const Main = ({ body, practica, js }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href={practica} target="_blank" rel="noreferrer">
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
      <div className="pageBody">
        <Body body={body} />
      </div>
      <div>
        <BlogPost
          title="Las Mejores Librerias de JavaScript para Aumentar la Productividad Las Mejores Librerias de JavaScript para Aumentar la Productividad."
          body="Todos escribimos mucho código en nuestro día a día. A veces creamos aplicaciones enormes y otras veces nos pasamos el día escribiendo código para funciones sencillas que quizá no tengamos que programar en absoluto. Hay cientos de miles de bibliotecas para todo tipo de casos de uso, y el uso de estos paquetes puede ahorrar mucho tiempo que puedes utilizar para ser más productivo."
        />
      </div>
      <h2>Aprendiendo Javascript moderno</h2>
    </div>
  );
};

export default Main;
