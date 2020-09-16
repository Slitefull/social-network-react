import React from "react";
import { NavLink } from "react-router-dom";

import { AddUserContainer } from './index';


const AddDialogsUser = ({ id, name }) => (
  <div className = "profile-user">
    <NavLink to = { "/dialogs/" + id } className = "profile-user__link">User: { name }</NavLink>
  </div>
)

export const DialogsUsers = ({ users }) => {
  const usersElements = users.map( u => <AddDialogsUser key = { u.id } {...u} /> )

  return (
    <div className = "users">
      <AddUserContainer />
      { usersElements }
    </div>
  )
}
