import React from 'react';
import './menu-items.css';

const AddItem = ({link, name}) => {
    return (
        <div className="menu__item">
            <a href={link} className="menu__item--link">{name}</a>
        </div>
    );
}

const MenuItemsHeader = () => {
    return (
        <>
            <AddItem link="#" name="Main"/>
            <AddItem link="#" name="Pictures"/>
            <AddItem link="#" name="Films"/>
            <AddItem link="#" name="Games"/>
            <AddItem link="#" name="Music"/>
            <AddItem link="#" name="Contacts"/>
        </>
    );
}

export default MenuItemsHeader;