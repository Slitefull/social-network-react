import React from "react";

import { NewMessage, AddMessageContainer } from '../../index';


export const Messages = ({ messages }) => {
    const messagesElements = messages.map(m => <NewMessage { ...m }/>)

    return (
        <div className = "messages">
            <AddMessageContainer />
            { messagesElements }
        </div>
    )
}