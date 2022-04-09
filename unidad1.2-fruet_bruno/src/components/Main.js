import React from "react";
import Body from "./Body";
import BlogPost from "./BlogPost";
import "./Main.css";

const news = {
  title:
    "Más bajas para Putin: los espías rusos están siendo expulsados en masa de Occidente",
  body: "Son unos 400 funcionarios de las llamadas “rezidenturas”, las estaciones de espías que funcionan en las embajadas rusas alrededor del mundo",
};

const Main = ({ pageBody, link1, link2 }) => {
  return (
    <div>
      <nav>
        <h3>MENU</h3>
      </nav>
      <ul>
        <a href={link1}>Infobae</a>
      </ul>
      <ul>
        <a href={link2}>Rosario 3</a>
      </ul>
      <p className="phrase">La pelota no se mancha</p>
      <div className="bodyMain">
        <Body body={pageBody} />
      </div>
      <BlogPost newsTitle={news.title} newsBody={news.body} />
    </div>
  );
};

export default Main;
