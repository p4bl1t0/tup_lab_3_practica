import Body from "./Body.js";

const Main = ({ body, links }) => {
  return (
    <div>
      <div>
        <navbar>
          <ul>
            <a href={links.github} target="_blank">Github</a>
          </ul>
          <ul>
            <a href={links.linkedin} target="_blank">Linkedin</a>
          </ul>
        </navbar>
      </div>
      <Body body={body + " Bonus reference"} />
    </div>
  );
};

export default Main;
