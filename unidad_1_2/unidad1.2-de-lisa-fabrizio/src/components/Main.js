import Body from './Body';

const Main = ({pageBody, links}) => {
    return (
        <div>
            <Body pageBody={pageBody}/>
            <navbar>
                <ul><a href={links.google}>Google</a></ul>
                <ul><a href={links.facebook}>Facebook</a></ul>
            </navbar>
            <h3>El agua hace flotar el barco, pero tambien puede hundirlo.</h3>
        </div>
    )
};

export default Main;