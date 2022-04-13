import "./Header.css";

import Title from "./Title.js";

const Header = ({ title }) => {
  return (
      <div className="Title-container">
        <Title title={title} />
      </div>
  );
};

export default Header;
