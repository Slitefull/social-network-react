import React from "react";

import { NewUser } from "./NewUser/NewUser";
import { AddUser } from "./AddUser/AddUser";

export const Users = ({ users, newUserName, dispatch }) => {
    const usersElements = users.map(u => <AddUser { ...u } />);

    return (
        <div className = "users">
            <NewUser newUserName = { newUserName } dispatch = { dispatch } />
            { usersElements }
        </div>
    );
}