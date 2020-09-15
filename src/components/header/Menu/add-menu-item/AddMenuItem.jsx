import React from "react";
import { NavLink } from "react-router-dom";

export const AddMenuItem = ({ link, title }) => (
    <div className = "menu__item">
        <NavLink to = { link } className="menu__item--link">{ title }</NavLink>
    </div>
)