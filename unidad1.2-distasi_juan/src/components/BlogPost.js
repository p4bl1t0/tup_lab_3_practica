import "./styles.css";
import Title from "./Title";
import Body from "./Body";

const BlogPost = () => {
  const news = [
    {
      title:
        "Javkin sobre la salida de El Cacique: 'Lo urgente es que la gente pueda viajar mejor'",
      body:
        "El intendente afirmó que está negociando con la empresa mendocina y que la intención es 'no dejarle un juicio en contra a la ciudad'. En una semana y media se conocería el nuevo esquema " +
        "El intendente Pablo Javkin anunció este lunes que en una semana y media aproximadamente se conocerá el nuevo esquema de transporte público de pasajeros que se implementará tras la salida de la empresa El Cacique. En principio trascendió que las líneas que son explotadas por firma mendocina serían distribuidas en las otras dos prestatarias del servicio, la estatal Movi y la privada Rosario Bus.",
    },
  ];
  return (
    <div className="blog-post">
      <Title title={news[0].title} />
      <Body body={news[0].body} />
    </div>
  );
};

export default BlogPost;
