import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Input} from "../../../../components/common/form-controls/form-controls";
import {maxLengthCreator, required} from "../../../../helpers/validators/validators";


const maxLength10 = maxLengthCreator(10);

export const AddMessage = ({sendMessage}) => {

  const addNewMessage = values => {
    sendMessage(values.message)
  }

  return (
    <div className="new-message">
      <p className="new-message__message">Add message</p>
      <NewMessageReduxForm onSubmit={addNewMessage}/>
    </div>
  )
}

const NewMessageForm = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <Field
      name={'message'}
      component={Input}
      placeholder={'message'}
      className="new-message__input"
      validate={[required, maxLength10]}
    />
    <div>
      <button className="new-message__button">Send</button>
    </div>
  </form>
)

const NewMessageReduxForm = reduxForm({form: 'new-message'})(NewMessageForm)