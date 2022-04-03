import Body from "./Body.js";

const Main = ({ li1, li2, pageBody }) => {
    return (
    <div>
        <nav>
            <ul>
                <li><a href={li1}>Google</a></li>
                <li><a href={li2}>Infobae</a></li>
            </ul>
        </nav>
        <Body pageBody={pageBody}/>
        <p>Nadie tiene éxito sin esfuerzo. Aquellos que tienen éxito
             se lo deben a la perseverancia (Ramana Maharshi)</p>
        </div>
      );
};

export default Main; 