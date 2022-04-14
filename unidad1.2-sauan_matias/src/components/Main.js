import React from "react";
import BlogSpot from "./BlogSpot";
import Body from "./Body";
import "./Main.css";

const Main = ({ body, firstLink, secondLink }) => {
  return (
    <div>
      <div className="body-style">
      <Body body={body} />
      </div>
      <navbar>
        <ul><a href="https://www.google.com/">{firstLink}</a></ul>
        <ul><a href="https://twitter.com/home">{secondLink}</a></ul>
        <p>esta es una frase de prueba :P</p>
      </navbar>
      <BlogSpot/>
    </div>
  );
};

export default Main;
