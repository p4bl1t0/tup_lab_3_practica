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
        </div>
      );
};

export default Main; 