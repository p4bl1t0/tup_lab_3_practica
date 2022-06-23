import { BlogPost } from "./BlogPost.js";
import Body from "./Body.js";

const Main = ({ body, links, post }) => {
  return (
    <div>
      <div>
        <navbar>
          <ul>
            <a href={links.github} target="_blank">
              Github
            </a>
          </ul>
          <ul>
            <a href={links.linkedin} target="_blank">
              Linkedin
            </a>
          </ul>
        </navbar>
      </div>
      <Body body={body + " Bonus reference"} />
      <BlogPost body={post.postBody} title={post.postTitle} />
    </div>
  );
};

export default Main;
