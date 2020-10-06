import React from "react";
import {Field, reduxForm} from 'redux-form';


export const AddMessage = ({addPost}) => {
  const addNewMessage = values => {
    addPost(values.message)
  }

  return (
    <div className="new-message">
      <p className="new-message__message">Add message</p>
      <NewMessageReduxForm onSubmit={addNewMessage} addPost={addPost}/>
    </div>
  )
}

const NewMessageForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name={'message'} component={'input'} placeholder={'message'} className="new-message__input"/>
      <div>
        <button className="new-message__button">Send</button>
      </div>
    </form>
  )
}

const NewMessageReduxForm = reduxForm({
  form: 'new-message'
})(NewMessageForm)
