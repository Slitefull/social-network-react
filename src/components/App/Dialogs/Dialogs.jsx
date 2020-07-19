import React from "react";
import "./Dialogs.scss";
import Users from "./Users/Users";
import Messages from "./Messages/Messages";

const Dialogs = props => {
    return (
        <main className="dialogs">
            <Users users={ props.state.users }/>
            <Messages messages={ props.state.messages } addMessage={ props.addMessage }/>
        </main>
    );
}

export default Dialogs;