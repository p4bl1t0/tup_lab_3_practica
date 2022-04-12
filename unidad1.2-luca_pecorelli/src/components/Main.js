import React from 'react'
import BlogPost from './BlogPost'
import Body from './Body'

import './Main.css'

const Main = ({pageBody, link1, link2}) => {
  
  return (
    <div className='main-page'>
      <Body pageBody={pageBody} />
      <BlogPost/>
        <nav>
            <ul>
                <li>
                <a href={link1} target="_blank" rel='noreferrer'>CVG</a>
                </li>
                <li>
                < a href={link2} target="_blank" rel='noreferrer'>Mozilla Dev Resources</a>
                </li>
            </ul>
        </nav>
        <p>Veni Vidi Vici</p>
    </div>
  )
}

export default Main
