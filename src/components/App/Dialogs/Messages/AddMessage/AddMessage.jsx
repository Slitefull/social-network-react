import React from "react";

import { addPostCreator, updateNewPostTextCreator } from "../../../../../redux/state";

export const AddMessage = ({ newMessageText, dispatch }) => {
    const dialogsMessage = React.createRef();

    const addPost = () => {
        const action = addPostCreator();
        dispatch(action);
    }

    const onPostChange = () => {
        const postMessage = dialogsMessage.current.value;
        const action = updateNewPostTextCreator(postMessage);
        dispatch(action);
    }

    return (
        <div className = "new-message">
            <p className = "new-message__message">Add message</p>
            <input className = "new-message__input" onChange = { onPostChange } ref = { dialogsMessage } value = { newMessageText } type = "text" />
            <button className = "new-message__button" onClick = { addPost }>Add</button>
        </div>
    );
}
