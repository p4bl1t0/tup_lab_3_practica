import React from 'react';
import Body from './Body';
import BlogPost from './BlogPost';

const Main = ({ pageBody, links }) => {
  return (
    <div>
        <div className='italic'>
            <Body body = {pageBody.toUpperCase()} />
        </div>
        <div>    
            <nadvar>
                <ul>
                    <li>
                        <a href={links[0]}>React: A JavaScript Library</a>
                    </li>
                    <li>
                        <a href={links[1]}>MDN: Resources for Developers</a>
                    </li>
                </ul>
            </nadvar>
        </div>                
        <BlogPost />
    </div>
  );
};

export default Main;