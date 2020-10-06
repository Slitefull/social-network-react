import React from "react";
import {Field, reduxForm} from 'redux-form';


export const AddUser = ({addUser}) => {
  const addNewUser = values => {
    addUser(values.user)
  }

  return (
    <div className="new-user">
      <p className="new-user__name">Add user</p>
      <NewUserReduxForm onSubmit={addNewUser}/>
    </div>
  )
}

const NewUserForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name={'user'} component={'input'} placeholder={'user'} className="new-user__input"/>
      <div>
        <button className="new-user__button">Add</button>
      </div>
    </form>
  )
}

const NewUserReduxForm = reduxForm({
  form: 'new-user'
})(NewUserForm)