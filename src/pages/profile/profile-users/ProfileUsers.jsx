import React from "react";

import { AddProfileUser, NewProfileUserContainer } from '../index';


export const ProfileUsers = ({ users }) => {
  const usersElements = users.map(u => <AddProfileUser key = { u.id } {...u} />)

  return (
    <div className = "users">
      <NewProfileUserContainer />
      { usersElements }
    </div>
  )
}