import React from "react";

import { NewMessage, AddMessageContainer } from '../../index';


export const Messages = ({ messages, newMessageText, dispatch }) => {
    const messagesElements = messages.map(m => <NewMessage { ...m }/>)

    return (
        <div className = "messages">
            <AddMessageContainer newMessageText = { newMessageText } dispatch = { dispatch } />
            { messagesElements }
        </div>
    )
}