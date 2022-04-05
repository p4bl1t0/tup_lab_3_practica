import React from "react";

const Main = ({ body, github, linkedin, sentence }) => {
  return (
    <div>
      {body}
      <nav>
        <ul>
          <li>
            <a href={github}>Github</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={linkedin}>LinkedIn</a>
          </li>
        </ul>
        <ul>
          <li>
            <p>{sentence}</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Main;
