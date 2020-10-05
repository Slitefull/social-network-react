import React from "react";
import {Field, reduxForm} from 'redux-form';


export const AddMessage = ({addPost, onPostMessageChangeHandler, newMessageText}) => {
  const dialogsMessage = React.createRef()

  const onSubmit = dataForm => {
    console.log(dataForm)
  }

  const onPostChange = () => {
    const postMessage = dialogsMessage.current.value;
    onPostMessageChangeHandler(postMessage)
  }

  return (
    <div className="new-message">
      <p className="new-message__message">Add message</p>
      <NewMessageReduxForm onSubmit = { onSubmit } onPostChange = { onPostChange } dialogsMessage = { dialogsMessage }
                           newMessageText={newMessageText}
                           addPost={addPost} />
    </div>
  )
}

const NewMessageForm = ({onPostChange, dialogsMessage, newMessageText, addPost, handleSubmit}) => {
  return (
    <form onSubmit = { handleSubmit }>
      <Field name = {'message'} component = {'input'} placeholder = {'message'} className = "new-message__input"
             onChange={onPostChange} ref={dialogsMessage} value = {newMessageText} />
      <div>
        <button className="new-message__button" onClick = { addPost }>Send</button>
      </div>
    </form>
  )
}

const NewMessageReduxForm = reduxForm({
  form: 'new-message'
})(NewMessageForm)
