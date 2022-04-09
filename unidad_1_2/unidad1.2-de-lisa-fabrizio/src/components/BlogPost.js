import './BlogPost.css'

import Title from "./Title";
import Body from "./Body";

const BlogPost = () => {

    const noticeTitle = "Newell's planea usar la opción de compra por uno de sus refuerzos";
    const noticeBody = "Después de un gran comienzo de año, en el que poco a poco el equipo \
    va tomando más forma y la regularidad se hace presente con el correr de los partidos, \
    la dirigencia de Newell's estaría analizando realizar uso de la opción de compra por uno de\
    los refuerzos que mejor nivel ha mostrado durante esta primera etapa del torneo, el defensor central Willer Ditta.\
    El colombiano de 24 años pertenece a Junior de Barranquilla, desde donde llegó a préstamo a principios de este año.\
     La opción de compra del conjunto leproso es del 80% del pase, tasado en U$S 700.000.";

    return (
        <div className = "notice">
            <Title title = {noticeTitle}/>
            <Body body = {noticeBody}/>
        </div>
    );
};

export default BlogPost;

