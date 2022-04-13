import React from "react";
import BlogSpot from "./BlogSpot";
import Body from "./Body";

const Main = ({ body, firstLink, secondLink }) => {
  return (
    <div>
      <Body body={body} />
      <BlogSpot/>
      <navbar>
        <ul><a href="https://www.google.com/">{firstLink}</a></ul>
        <ul><a href="https://twitter.com/home">{secondLink}</a></ul>
        <p>esta es una frase de prueba :P</p>
      </navbar>
    </div>
  );
};

export default Main;
