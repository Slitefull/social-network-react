import React from "react";

import { AddUser, NewUserContainer } from '../../index';


export const Users = ({ users }) => {
    const usersElements = users.map(u => <AddUser { ...u } />)

    return (
        <div className = "users">
            <NewUserContainer />
            { usersElements }
        </div>
    )
}