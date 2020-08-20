import React from "react";

import { NewMessage } from "./NewMessage/NewMessage";
import { AddMessage } from "./AddMessage/AddMessage";

export const Messages = ({ messages, newMessageText, dispatch }) => {
    const messagesElements = messages.map(m => <NewMessage { ...m }/>)

    return (
        <div className = "messages">
            <AddMessage newMessageText = { newMessageText } dispatch = { dispatch } />
            { messagesElements }
        </div>
    )
}