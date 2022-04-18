import React from "react";
import Body from "./Body";
import BlogPost from "./BlogPost";
import Title from "./Title";
import "./Main.css";

const Main = ({ pageBody, link1, link2 }) => {
  const Main = { link1, link2, title, body, titleNews, bodyNews };
  return (
    <div>
      <Body pageBody={pageBody} />
      <ul>
        <li> {link1} </li>
        <li>{link2}</li>
      </ul>
      <p> Aprendiendo a usar React </p>
      <div className="main">
        <Title title={title} />
        <i>
          <Body body={body} />
        </i>
        <ul>
          <li>{link1}</li>
          <li>{link2}</li>
        </ul>
        <p> Aprendiendo a usar React </p>
      </div>
      <div>
        <BlogPost title={titleNews} body={bodyNews} />
      </div>
    </div>
  );
};

export default Main;
