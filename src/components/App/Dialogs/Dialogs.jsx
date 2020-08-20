import React from "react";

import { Users } from "./Users/Users";
import { Messages } from "./Messages/Messages";

import "./Dialogs.scss";


export const Dialogs = ({ state, dispatch }) => {
    const { users, messages, newUserName, newMessageText } = state;

    return (
        <main className = "dialogs">
            <Users
                users = { users }
                dispatch = { dispatch }
                newUserName = { newUserName }
            />
            <Messages
                messages = { messages }
                dispatch = { dispatch }
                newMessageText = { newMessageText }
            />
        </main>
    )
}