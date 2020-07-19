import React from 'react';
import { NavLink } from "react-router-dom";
import './Menu.scss';

const ModalButton = () => {
    const showModal = () => { alert('А хуй тобі!') }

    return ( <button onClick={ showModal } className="menu__item--button">Add Film</button> );
}

const AddItem = ({ link, name }) => {
    return (
        <div className="menu__item">
            <NavLink to={ link } className="menu__item--link">{ name }</NavLink>
        </div>
    );
}

const MenuHeader = () => {
    return (
        <nav className="menu">
            <AddItem link="/general" name="General"/>
            <AddItem link="/dialogs" name="Dialogs"/>
            <ModalButton/>
        </nav>
    );
}

export default MenuHeader;