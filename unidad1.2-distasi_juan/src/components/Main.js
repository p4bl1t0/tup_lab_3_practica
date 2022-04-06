import Body from "./Body";

const Main = ({ pageBody, links }) => {
  return (
    <div>
      <Body pageBody={pageBody} />
      <nav>
        <ul>
          <li>
            <a href={links[0].url}>{links[0].name}</a>
          </li>
          <li>
            <a href={links[1].url}>{links[1].name}</a>
          </li>
        </ul>
      </nav>
      <p>Realizada Tarea 3</p>
    </div>
  );
};

export default Main;
