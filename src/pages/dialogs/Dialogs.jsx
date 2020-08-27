import React from "react";

import { Users, Messages } from '../index';

import "./Dialogs.scss";


export const Dialogs = ({ store }) => {
    return (
        <main className = "dialogs">
            <Users store = { store } />
            <Messages store = { store } />
        </main>
    )
}