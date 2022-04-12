import Body from "./Body"
import Title from "./Title"

import './BlogPost.css '

const BlogPost = ({ title, body}) => {
  return (
    <div className="blogpost">
        <Title title= "El agente de Facundo Campazzo habló de su presente en la NBA: “Está tranquilo, pero resignado”"/>
        <Body body= "La situación de Facundo Campazzo en los Denver Nuggets no mejora. Con el equipo clasificado a los playoffs de la NBA, las chances de que el argentino juegue son cada vez más escasas. El base no solo tiene pocos minutos, sino que además hay partidos en los que no es convocado o no ingresa." />

    </div>
  )
}

export default BlogPost