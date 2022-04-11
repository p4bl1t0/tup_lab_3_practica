import React from 'react'
import Title from './Title'
import Body from './Body'

const BlogPost = ( {title, body} ) => {

    const newspaper ={
        news: 'Gaspar Servio: en Central "ahora estamos para no arriesgar tanto"',
        newsBody: 'El arquero de Central siente que es necesario ganar en confianza. Dijo que el equipo está en deuda con la gente y que sueña con lograr la clasificación.'
      }

  return (
    <div>
        <Title title = {newspaper.news} />
        <Body body = {newspaper.newsBody}/>
    </div>
  )
}

export default BlogPost