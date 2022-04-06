import Body from "./Body";

const Main = ({ pageBody, link1, link2 }) => {
  return (
    <div>
      <Body pageBody = {pageBody}/>
      <nav>
      <p></p>Sitios de interés:
        <ul>
          <li>
            <a href={link1} target="_blank" rel="noreferrer">
              Sitio 1
            </a>
          </li>
          <li>
            <a href={link2} target="_blank" rel="noreferrer">
              Sitio 2
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Main;
