import './Main.css';

import Body from './Body';
import BlogPost from './BlogPost';

const Main = ({body, links}) => {
    return (
        <div>
            <div className = "mainBody">
              <Body body={body} />
            </div>

            <navbar >
                <ul className="links"><a href={links.google}>Google</a></ul>
                <ul className="links"><a href={links.facebook}>Facebook</a></ul>
            </navbar>

            <h3>El agua hace flotar el barco, pero tambien puede hundirlo.</h3>

            <BlogPost/>
        </div>
    )
};

export default Main;