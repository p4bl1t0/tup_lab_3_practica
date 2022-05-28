import Title from "./Title";

const Header = ({ pageTitle }) => {
  return (
    <header>
      <Title pageTitle={pageTitle} />
    </header>
  );
};

export default Header;
