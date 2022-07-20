import React from "react";
import Title from "./Title";
import './Header.css';

const Header = ({ pageTitle }) => {
    return (
        <div>
            <Title className="title" title={pageTitle} />
        </div>
    );
};

export default Header;