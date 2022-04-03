import React from 'react';
import Body from './Body';

const Main = ({pageBody, link, link2}) => {
  return (
    <div>
        <p>LAB 3 TUP 2022</p>
        <Body pageBody={pageBody}
        />
        <nav>
            <ul>
                <li>
                    <a href={link}>1</a>
                </li>
                <li>
                    <a href={link2}>2</a>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Main;