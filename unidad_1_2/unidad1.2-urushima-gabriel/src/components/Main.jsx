import React from "react";
import BlogPost from "./BlogPost";
import Body from "./Body";

const Main = ({ body, github, linkedin, sentence, estilo }) => {
  return (
    <div>
      <Body body={body.toUpperCase()} estilo={"italic"} />
      <nav>
        <ul>
          <li>
            <a href={github}>Github</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={linkedin}>LinkedIn</a>
          </li>
        </ul>
        <ul>
          <li>
            <p style={{ color: estilo }}>{sentence}</p>
          </li>
        </ul>
      </nav>
      <BlogPost />
    </div>
  );
};

export default Main;
