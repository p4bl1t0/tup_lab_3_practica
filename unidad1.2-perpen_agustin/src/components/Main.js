import React from 'react';
import BlogPost from './BlogPost';
import Body from './Body';
import Title from './Title';
import "./Main.css"

const Main = ({ siteOne, siteTwo, title, body, titleNews, bodyNews}) => {
  return (    
      <div>
        <div className='main'>         
          <Title title={title}/>
          <i>
            <Body body={body}/>
          </i>
          <ul>
              <li>{siteOne}</li>
              <li>{siteTwo}</li>
          </ul>
          <p>No sos vos soy yo</p>
        </div>
        <div>
          <BlogPost title={titleNews} body={bodyNews}/>
        </div>
      </div>      
  )
}

export default Main;