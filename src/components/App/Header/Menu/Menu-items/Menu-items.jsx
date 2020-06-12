import React from 'react';
import {NavLink} from "react-router-dom";

const AddItem = ({link, name}) => {
    return (
        <div className="menu__item">
            <NavLink to={link} className="menu__item--link">{name}</NavLink>
        </div>
    );
}

const MenuItems = () => {
    return (
        <>
            <AddItem link="/general" name="General"/>
            <AddItem link="/dialogs" name="Dialogs"/>
            <AddItem link="/modal" name="Modal window"/>
        </>
    );
}
//TODO fix url and delete it
export default MenuItems;