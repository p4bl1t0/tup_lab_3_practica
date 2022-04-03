import Title from "./Title.js";

const Header = ({ pageTitle }) => {
    return (
        <header>
          <Title pageTitle={pageTitle}/>
        </header>
      );
};

export default Header;