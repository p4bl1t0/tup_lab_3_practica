import React from "react";
import Title from "./Title";
import Body from "./Body";
import "./Blogpost.css";

const Blogpost = () => {
  const News = [
    {
      title:
        "El desplome de Terra y Luna: la espiral de la muerte de las criptomonedas",
      body: "Cómo la caída de una criptodivisa ha asustado a mercados financieros y dejado sin dinero a miles de inversores.",
    },
  ];
  return (
    <div className="Blog_container">
      <Title title={News[0].title} />
      <Body body={News[0].body} />
    </div>
  );
};

export default Blogpost;
