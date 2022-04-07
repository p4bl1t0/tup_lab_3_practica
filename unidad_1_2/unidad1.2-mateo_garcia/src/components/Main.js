import Body from "./Body.js";

const Main = ({ pageBody, links }) => {
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
      <Body pageBody={pageBody + "Referencia Bonus"} />
    </div>
  );
};

export default Main;
