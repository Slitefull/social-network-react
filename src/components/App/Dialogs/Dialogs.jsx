import React from "react";
import "./Dialogs.scss";
import Users from "./Users/Users";
import Messages from "./Messages/Messages";

const Dialogs = () => {
    return (
        <main className="dialogs">
            <Users/>
            <Messages/>
        </main>
    );
}


export default Dialogs;