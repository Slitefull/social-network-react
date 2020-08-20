import React from 'react';

import { isModalCreator } from "../../../../redux/state";
import { AddMenuItem } from "./AddMenuItem/AddMenuItem";

import './Menu.scss';


const showModal = dispatch => {
    const action = isModalCreator();
    dispatch(action);
}

export const MenuHeader = ({ dispatch }) => (
    <nav className = "menu">
        <AddMenuItem link = "/general" title = "General" />
        <AddMenuItem link = "/dialogs" title = "Dialogs" />
        <button onClick = { () => showModal( dispatch ) } className = "menu__item--button">Add Film</button>
    </nav>
)