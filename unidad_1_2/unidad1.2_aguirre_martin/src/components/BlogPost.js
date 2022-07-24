import React from 'react';
import Title from './Title';
import Body from './Body';

const BlogPost = () => {
    const infoNews = {
        title: 'Google empezará a probar su kit de realidad aumentada',
        body: 'La compañía de Mountain View tiene previsto que en agosto empiecen las pruebas de los prototipos en espacios públicos. Sin embargo, aseguraron que en esta ocasión su política de testeo abierta al público será más conservadora y que luego de la prueba se tomarán su tiempo a la hora de analizar los resultados.',      
    }
  return (
    <div className='info-news'>
        <Title title = {infoNews.title} />
        <Body body = {infoNews.body} />
    </div>
  );
};

export default BlogPost;