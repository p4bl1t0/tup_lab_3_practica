import React from 'react'
import Body from './body'

const Main = ({pageBody, link1, link2}) => {
  return (
    <div>
       <Body pageBody={pageBody}/>
        <nav>
            <ul>
                <li>
                <a href={link1} target="_blank">CVG</a>
                </li>
                <li>
                < a href={link2} target="_blank">Mozilla Dev Resources</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Main