import './Header.css';

import Title from "./Title";

 const Header = ({title}) => {

    return (
    <div class = "titleNotice">
        <Title  title={title}/>
    </div>
    )
};

export default Header;