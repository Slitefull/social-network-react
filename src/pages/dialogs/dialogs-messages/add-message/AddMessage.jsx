import React from "react";


export const AddMessage = ({ addPost, onPostMessageChangeHandler, newMessageText }) => {
  const dialogsMessage = React.createRef()

  const onPostChange = () => { const postMessage = dialogsMessage.current.value; onPostMessageChangeHandler(postMessage) }

  return (
    <div className = "new-message">
      <p className = "new-message__message">Add message</p>
      <input className = "new-message__input" onChange = { onPostChange } ref = { dialogsMessage } value = { newMessageText } type = "text"/>
      <button className = "new-message__button" onClick = { addPost }>Add</button>
    </div>
  )
}