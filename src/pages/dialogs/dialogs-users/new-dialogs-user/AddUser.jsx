import React from "react";
import {Field, reduxForm} from 'redux-form';


export const AddUser = ({addUser, onUserNameChangeHandler, newUserName}) => {
  const dialogsUser = React.createRef();

  const onSubmit = dataForm => {
    console.log(dataForm)
  }

  const onUserChange = () => {
    const userName = dialogsUser.current.value;
    onUserNameChangeHandler(userName)
  }

  return (
    <div className="new-user">
      <p className="new-user__name">Add user</p>
      <NewUserReduxForm onSubmit={onSubmit} dialogsUser={dialogsUser} onUserChange={onUserChange}
                        newUserName={newUserName}
                        addUser={addUser}/>
    </div>
  )
}

const NewUserForm = ({handleSubmit, dialogsUser, onUserChange, newUserName, addUser}) => {
  return (
    <form onSubmit = {handleSubmit}>
      <Field name={'user'} component={'input'} placeholder={'user'} className="new-user__input" ref={dialogsUser}
             onChange={onUserChange} value={newUserName}/>
      <div>
        <button onClick={addUser} className="new-user__button">Add</button>
      </div>
    </form>
  )
}

const NewUserReduxForm = reduxForm({
  form: 'new-user'
})(NewUserForm)
