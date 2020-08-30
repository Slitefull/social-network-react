import React from 'react';

import './Header.scss';
import { MenuContainer } from "./menu/MenuContainer";


export const Header = () => (
    <header className = "header">
        <div className = "header__logo">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Logo" className="header__logo--image"/>
        </div>
        <MenuContainer />
    </header>
)