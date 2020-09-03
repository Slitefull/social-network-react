import { NavLink } from "react-router-dom";
import React from "react";


export const AddUser = ({ id, name }) => (
    <div className = "user">
        <NavLink to = { "/dialogs/" + id } className = "user__link">User: { name }</NavLink>
    </div>
)