import React from "react";

import { AddUser, NewUserContainer } from '../../index';


export const Users = ({ store }) => {
    const state = store.getState();

    const { dialogsPage } = state;
    const { users } = dialogsPage;

    const usersElements = users.map(u => <AddUser { ...u } />)

    return (
        <div className = "users">
            <NewUserContainer store = { store } />
            { usersElements }
        </div>
    )
}