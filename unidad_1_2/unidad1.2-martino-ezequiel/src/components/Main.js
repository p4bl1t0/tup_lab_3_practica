import React from "react";
import BlogPost from "./BlogPost";
import Body from "./Body";

import "./Main.css"

const Main = ({ body, links }) => {
  return (
    <div>
      <nav>
        <p>Estos links son re facheros B-)</p>
        <ul>
          <li>
            <a href={links[0]}>{links[0]}</a>
          </li>
          <li>
            <a href={links[1]}>{links[1]}</a>
          </li>
        </ul>
      </nav>
      <div className="pageBody">
        <Body body={body} />
      </div>
      <div>
        <BlogPost body="Lo anunció el ministro de Salud bonaerense Nicolás Kreplak. También incluye lugares recreativos pero sigue para el transporte público."
        title="Desde este jueves, no será obligatorio el barbijo en escuelas ni trabajos en la Provincia de Buenos Aires"
        />
      </div>
    </div>
  );
};

export default Main;
