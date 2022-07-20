import React from "react";
import BlogPost from "./BlogPost";
import Body from "./Body";
import './Main.css';

const Main = ({ title, body, pageBody, extLinks }) => {
  return (
    <div>
      <div>
        <p>Algunos links referentes a LabComIII:</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href={extLinks[0]} target="_blank" rel="noreferrer">
              Practica
            </a>
          </li>
          <li>
            <a href={extLinks[1]} target="_blank" rel="noreferrer">
              Lucas Gh profile
            </a>
          </li>
        </ul>
      </nav>
      <Body className= "main-body" body={pageBody} />
      <BlogPost title={title} body={body} />
    </div>
  );
};

export default Main;
