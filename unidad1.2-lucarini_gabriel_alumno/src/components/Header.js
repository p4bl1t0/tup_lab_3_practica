import Title from "./Title.js";

const Header = ({ title }) => {
    return (
        <header>
          <Title title={title.toUpperCase()}/>
        </header>
      );
};

export default Header;