import Body from "./Body.js";
import "./p.css"

const Main = ({ li1, li2, body}) => {
    return (
    <div>
        <nav>
            <ul>
                <li><a href={li1}>Google</a></li>
                <li><a href={li2}>Infobae</a></li>
            </ul>
        </nav>
        <Body body={body.toUpperCase()}/>
        <p className="p-css">Nadie tiene éxito sin esfuerzo. Aquellos que tienen éxito
             se lo deben a la perseverancia (Ramana Maharshi)</p>
        </div>
      );
};

export default Main; 