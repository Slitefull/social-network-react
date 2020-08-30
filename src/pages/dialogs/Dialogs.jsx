import React from "react";

import { UsersContainer } from "./users/UsersContainer";
import { MessagesContainer } from "./messages/MessagesContainer";

import "./Dialogs.scss";


export const Dialogs = () => {
    return (
        <main className = "dialogs">
            <UsersContainer />
            <MessagesContainer />
        </main>
    )
}