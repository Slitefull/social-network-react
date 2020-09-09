import React from "react";

import { AddDialogsUser, AddUserContainer } from '../index';


export const DialogsUsers = ({ users }) => {
  const usersElements = users.map( u => <AddDialogsUser key = { u.id } {...u} /> )

  return (
    <div className = "users">
      <AddUserContainer />
      { usersElements }
    </div>
  )
}
