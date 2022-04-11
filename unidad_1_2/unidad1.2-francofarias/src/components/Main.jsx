import BlogPost from "./BlogPost"
import Body from "./Body"
const Main = ({body, youtube, google, estilo}) => {
  return (
    <div>
        <Body body={body.toUpperCase()} estilo={"italic"} />
        <nav>
          <ul>
            <li>
            <a href={google}>Google</a>
            </li>
            <li>
            <a href={youtube}>Youtube</a>
            </li>
          </ul>
        </nav>
        <p>Programador en curso...</p>
        <hr />
        <BlogPost />
    </div>
  )
}

export default Main