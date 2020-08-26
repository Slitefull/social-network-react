import React from "react";

import { AddUser, NewUserContainer } from '../../index';


export const Users = ({ users, newUserName, dispatch }) => {
    const usersElements = users.map(u => <AddUser { ...u } />)

    return (
        <div className = "users">
            <NewUserContainer newUserName = { newUserName } dispatch = { dispatch } />
            { usersElements }
        </div>
    )
}