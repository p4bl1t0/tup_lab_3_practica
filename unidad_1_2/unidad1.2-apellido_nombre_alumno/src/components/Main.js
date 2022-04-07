import Body from "./Body";

const Main = ({ pageBody }) => {
  return (
    <div>
      <Body pageBody={pageBody} />
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About us</a>
        </li>
      </ul>
    </div>
  );
};

export default Main;
