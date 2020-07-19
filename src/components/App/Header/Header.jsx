import React from 'react';
import './Header.scss';
import MenuHeader from "./Menu/Menu.jsx";

const Header = () => {
    return (
        <header className="header">
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
//TODO Запитати в Сані як зробити правильно урлу на головну