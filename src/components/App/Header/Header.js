import React from 'react';
import './header.css';
import MenuHeader from "./Menu/Menu";

const Header = () => {
    return (
        <header className="Header">
            <div className="header__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    alt="Logo" className="header__logo--image"/>
            </div>
            <MenuHeader/>
        </header>
    );
}

export default Header;
