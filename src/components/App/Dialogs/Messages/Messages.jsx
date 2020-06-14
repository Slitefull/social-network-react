import React from "react";

const AddMessage = ({message}) => {
    return (
        <div className="message">
            Message: {message}
        </div>
    );
}

const Messages = () => {
    return (
        <div className="messages">
            <AddMessage message={"hi!"}/>
            <AddMessage message={"hi!"}/>
            <AddMessage message={"hi!"}/>
            <AddMessage message={"hi!"}/>
        </div>
    );
}

export default Messages;