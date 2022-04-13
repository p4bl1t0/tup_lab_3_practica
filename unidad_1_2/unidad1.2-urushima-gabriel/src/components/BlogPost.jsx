import React from "react";
import Title from "./Title";
import Body from "./Body";

const BlogPost = ({ title, body }) => {
  const news = {
    Title: "Los cinco mejores smartwatches con Android del mercado",
    Body: "Comprar un smartwatch no es sencillo. Hay un abanico enorme de dispositivos y cada vez son más los fabricantes que lanzan sus propuestas al mercado. Decidirse por uno no es sencillo, y mucho menos cuando buscamos el mejor. No el mejor en relación calidad/precio, no el más barato, no el más bonito, sino el mejor reloj inteligente, el más completo, el que mejor experiencia ofrece.",
  };

  return (
    <div>
      <Title title={news.Title} />
      <Body body={news.Body} />
    </div>
  );
};

export default BlogPost;
