import Body from "./Body";
import Title from "./Title";

const BlogPost = ({ title, body }) => {
  return (
    <div >
      <Title title="La camiseta de Diego de “la mano de Dios” será subastada en Londres"/>
      <Body body="La casaca azul con el número 10 estará a la venta entre el 20 de abril y el 4 de mayo, y la subasta partirá desde 5.3 millones de dólares." />
    </div>
  );
};

export default BlogPost;
