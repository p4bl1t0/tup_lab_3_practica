import BlogPost from "./BlogPost";
import Body from "./Body";

const Main = (props, { pageBody }) => {
  //props tiene que ir primero
  return (
    <div>
      <Body
        style={{
          fontStyle: "italic",
        }}
        pageBody={pageBody}
      />
      <BlogPost />
      <ul>
        <li>
          <a href={props.link1}>Google</a>
        </li>
        <li>
          <a href={props.link2}>youtube</a>
        </li>
      </ul>
      <p>
        Dentro de poco tiempo se va a licitar un sistema de vuelos espaciales
        mediante el cual desde una plataforma, que quizá se instale en Córdoba,
        esas naves van a salir de la atmósfera, se van a remontar a la
        estratósfera, y desde ahí elegirán el lugar donde quieran ir
      </p>
    </div>
  );
};

export default Main;
