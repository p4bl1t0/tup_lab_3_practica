import React from "react";
import Body from "./Body";
import Title from "./Title";

const BlogPost = () => {
  let data = {
    title: "Atraparon al sospechoso de un homicidio en el barrio La Esperanza",
    body: "Efectivos de la AIC lo atraparon en la puerta del Hospital Eva Perón de Granadero Baigorria. Será acusado de matar a Angel Vera el pasado 20 de febrero",
  };
  return (
    <div>
      <Title title={data.title} />
      <Body body={data.body} />
    </div>
  );
};

export default BlogPost;
