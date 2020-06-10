import React from 'react';
import './menu.css';
import MenuItemsHeader from "./Menu-items/Menu-items";

const MenuHeader = () => {
    return (
        <nav className="Menu">
            <MenuItemsHeader/>
        </nav>
    );
}

export default MenuHeader;
