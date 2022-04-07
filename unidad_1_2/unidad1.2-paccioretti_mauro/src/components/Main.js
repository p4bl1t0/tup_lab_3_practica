import React from "react";
import Body from "./Body";
import BlogPost from "./BlogPost";
import "./Style.css";

const Main = ({ pageBody, enlace1, enlace2, children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a target="_blank" href={enlace1} rel="noreferrer">
              enlace1
            </a>
          </li>
          <li>
            <a target="_blank" href={enlace2} rel="noreferrer">
              enlace2
            </a>
          </li>
        </ul>
      </nav>
      <Body className="italic fondo-pintado" body={pageBody} />

      <BlogPost />
      <p>{children}</p>
    </div>
  );
};

export default Main;
