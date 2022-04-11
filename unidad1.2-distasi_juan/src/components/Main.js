import "./styles.css";
import BlogPost from "./BlogPost";
import Body from "./Body";

const Main = ({ pageBody, links }) => {
  return (
    <div>
      <div className="text-style">
        <Body body={pageBody} />
      </div>
      <BlogPost />
      <nav>
        <ul>
          <li>
            <a href={links[0].url}>{links[0].name}</a>
          </li>
          <li>
            <a href={links[1].url}>{links[1].name}</a>
          </li>
        </ul>
        <p>Realizada Tarea 3</p>
      </nav>
    </div>
  );
};

export default Main;
