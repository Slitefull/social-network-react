import React from "react";

const AddMessage = ({message}) => {
    return (
        <div className="message">
            Message: {message}
        </div>
    );
}

const Messages = () => {
    let messages = [
        {id: 1, message: 'hi!'},
        {id: 2, message: 'hello!'},
        {id: 3, message: 'php hueta!'},
        {id: 4, message: 'da, tak i est!'},
    ]

    let messagesElements = messages.map(m => <AddMessage message={m.message}/>)

    return (
        <div className="messages">
            {messagesElements}
        </div>
    );
}

export default Messages;