import { NavLink } from "react-router-dom";
import React from "react";


export const AddDialogsUser = ({ id, name }) => (
    <div className = "profile-user">
        <NavLink to = { "/dialogs/" + id } className = "profile-user__link">User: { name }</NavLink>
    </div>
)
