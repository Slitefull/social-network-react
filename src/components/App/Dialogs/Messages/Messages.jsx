import React from "react";
import { addPostCreator, updateNewPostTextCreator } from "../../../../redux/state";

const AddMessage = props => {
    const dialogsMessage = React.createRef();

    const addPost = () => {
        const action = addPostCreator();
        props.dispatch( action );
    }

    const onPostChange = () => {
        const postMessage = dialogsMessage.current.value;
        const action = updateNewPostTextCreator(postMessage);
        props.dispatch(action);
    }

    return (
        <div className="new-message">
            <p className="new-message__message">Add message</p>
            <input className="new-message__input" onChange = { onPostChange } ref = { dialogsMessage } value = { props.newMessageText } type="text"/>
            <button className="new-message__button" onClick = { addPost }>Add</button>
        </div>
    );
}

const NewMessage = ({ message }) => {
    return (
        <div className = "message">
            Message: { message }
        </div>
    );
}

const Messages = props => {
    const messagesElements = props.messages.map(m => <NewMessage { ...m }/>)
    return (
        <div className = "messages">
            <AddMessage newMessageText = { props.newMessageText } dispatch = { props.dispatch } />
            { messagesElements }
        </div>
    );
}

export default Messages;