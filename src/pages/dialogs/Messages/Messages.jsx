import React from "react";

import { NewMessage, AddMessageContainer } from '../../index';


export const Messages = ({ store }) => {
    const state = store.getState();

    const { dialogsPage } = state;
    const { messages } = dialogsPage;

    const messagesElements = messages.map(m => <NewMessage { ...m }/>)

    return (
        <div className = "messages">
            <AddMessageContainer store = { store } />
            { messagesElements }
        </div>
    )
}