import React from "react";
import Body from "./Body";

const Main = ({ pageBody }) => {
  return (
    <div>
      <Body Body={pageBody} />
      <nav>
        <p>{pageBody}</p>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=5257s">
              Aprende React
            </a>
          </li>
          <br /> <br />
          <li>
            <a href="https://es.reactjs.org/">Documentacion de React</a>
          </li>
        </ul>
      </nav>
      <br />
      <p>Me costo una banda</p>
    </div>
  );
};

export default Main;
