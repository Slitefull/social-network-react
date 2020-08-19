import React from "react";
import "./Dialogs.scss";
import Users from "./Users/Users";
import Messages from "./Messages/Messages";

export const Dialogs = props => {
    return (
        <main className = "dialogs">
            <Users
                users = { props.state.users }
                newUserName = { props.state.newUserName }
                dispatch = { props.dispatch }
            />
            <Messages
                messages = { props.state.messages }
                newMessageText = { props.state.newMessageText }
                dispatch = { props.dispatch }
            />
        </main>
    );
}