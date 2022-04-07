import React from "react";
import Body from "./Body";

const Main = ({ pageBody, links }) => {
  return (
    <div>
      <nav>
        <p>Estos links son re facheros B-)</p>
        <ul>
          <li>
            <a href={links[0]}>Facebook</a>
          </li>
          <li>
            <a href={links[1]}>Amazon</a>
          </li>
        </ul>
      </nav>
      <div>
        <Body pageBody={pageBody} />
      </div>
    </div>
  );
};

export default Main;
