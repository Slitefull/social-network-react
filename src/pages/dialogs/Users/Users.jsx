import React from "react";

import { AddUser, NewUser } from '../../index';


export const Users = ({ users, newUserName, dispatch }) => {
    const usersElements = users.map(u => <AddUser { ...u } />);

    return (
        <div className = "users">
            <NewUser newUserName = { newUserName } dispatch = { dispatch } />
            { usersElements }
        </div>
    );
}