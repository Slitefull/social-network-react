import React from "react";

import { NewMessage,AddMessage } from '../../index';


export const Messages = ({ messages, newMessageText, dispatch }) => {
    const messagesElements = messages.map(m => <NewMessage { ...m }/>)

    return (
        <div className = "messages">
            <AddMessage newMessageText = { newMessageText } dispatch = { dispatch } />
            { messagesElements }
        </div>
    )
}