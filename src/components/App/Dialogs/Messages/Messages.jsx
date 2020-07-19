import React from "react";

const AddMessage = props => {
    const dialogsMessage = React.createRef();

    const showMessage = () => {
        const postMessage = dialogsMessage.current.value;
        props.addMessage( postMessage );
        dialogsMessage.current.value = '';
    }

    return (
        <div className="dialogs__button">
            <input ref={ dialogsMessage } type="text"/>
            <button onClick={ showMessage }>Add</button>
        </div>
    );
}

const NewMessage = ({ message }) => {
    return (
        <div className="message">
            Message: { message }
        </div>
    );
}

const Messages = props => {
    const messagesElements = props.messages.map(m => <NewMessage {...m}/>)

    return (
        <div className="messages">
            { messagesElements }
            <AddMessage addMessage={ props.addMessage } />
        </div>
    );
}

export default Messages;