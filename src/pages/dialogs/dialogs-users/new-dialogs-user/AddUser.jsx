import React from "react";


export const AddUser = ({ addUser, onUserNameChangeHandler, newUserName }) => {
  const dialogsUser = React.createRef();

  const onUserChange = () => { const userName = dialogsUser.current.value; onUserNameChangeHandler(userName) }

  return (
    <div className = "new-user">
      <p className = "new-user__name">Add user</p>
      <input className = "new-user__input" ref = {dialogsUser} onChange = { onUserChange } value = { newUserName } type = "text" />
      <button onClick = { addUser } className = "new-user__button">Add</button>
    </div>
  )
}