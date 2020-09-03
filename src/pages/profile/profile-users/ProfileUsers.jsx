import React from "react";

import { AddUser, NewUserContainer } from '../index';


export const ProfileUsers = ({ users }) => {
  const usersElements = users.map(u => <AddUser key = { u.id } {...u} />)

  return (
    <div className = "users">
      <NewUserContainer />
      { usersElements }
    </div>
  )
}