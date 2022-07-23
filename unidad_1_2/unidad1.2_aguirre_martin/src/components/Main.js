import React from 'react';
import Body from './Body';

const Main = ({ pageBody, links }) => {
  return (
    <div>
        <Body pageBody = {pageBody} />
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
  );
};

export default Main;