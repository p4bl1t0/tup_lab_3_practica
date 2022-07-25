import Title from "./Title";

const Header = ({ pageTitle }) => {
  return (
    <header>
      <Title pageTitle={pageTitle.toUpperCase()} />
    </header>
  );
};

export default Header;
