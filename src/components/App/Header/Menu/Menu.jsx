import React from 'react';
import './Menu.scss';
import MenuItems from "./Menu-items/Menu-items.jsx";

const MenuHeader = () => {
    return (
        <nav className="menu">
            <MenuItems/>
        </nav>
    );
}

export default MenuHeader;