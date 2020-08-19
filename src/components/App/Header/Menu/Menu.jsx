import { ModalButton } from "../../Modal/Modal";
import { NavLink } from "react-router-dom";
import React from 'react';
import './Menu.scss';

const AddItem = ({ link, name }) => {
    return (
        <div className = "menu__item">
            <NavLink to = { link } className="menu__item--link">{ name }</NavLink>
        </div>
    );
}

const MenuHeader = props => {
    return (
        <nav className="menu">
            <AddItem link = "/general" name = "General"/>
            <AddItem link = "/dialogs" name = "Dialogs"/>
            <ModalButton dispatch = { props.dispatch }/>
        </nav>
    );
}

export default MenuHeader;