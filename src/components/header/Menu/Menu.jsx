import React from 'react';

import { AddMenuItem } from '../../index';

import './Menu.scss';


export const Menu = ({ showModal }) => {
    console.log(showModal)
    return(
    <nav className = "menu">
        <AddMenuItem link = "/general" title = "General" />
        <AddMenuItem link = "/dialogs" title = "Dialogs" />
        <button onClick = { () => showModal() } className = "menu__item--button">Add Film</button>
    </nav>
) }