import Title from "./Title";
import Body from "./Body";

const BlogPost = () => {
  const noticia = {
    title:
      "El inspector de tránsito y dos policías fueron imputados pero quedaron libres por el incidente con un conductor en Mitre al 900",
    body: "Es por el hecho sucedido en diciembre pasado. Los policías, que agarraron del cuello y golpearon a la víctima, fueron imputados por apremios ilegales. El agente municipal fue imputado por falsedad ideológica.",
  };
  return (
    <div>
      <Title title={noticia.title} />
      <Body body={noticia.body} />
    </div>
  );
};

export default BlogPost;
