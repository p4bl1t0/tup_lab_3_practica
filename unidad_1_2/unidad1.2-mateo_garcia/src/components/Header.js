import "./Header.css";

import Title from "./Title.js";

const Header = ({ pageTitle }) => {
  return (
    <div>
      <div className="navBar-container">
        <ul>
          <li>
            <a href="default.asp">Home</a>
          </li>
          <li>
            <a href="news.asp">News</a>
          </li>
        </ul>
      </div>
      <hr></hr>
      <div className="Title-container">
        <Title pageTitle={pageTitle} />
      </div>
    </div>
  );
};

export default Header;
