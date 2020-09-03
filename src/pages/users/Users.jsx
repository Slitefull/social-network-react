import React from 'react';
import { NewUser } from './new-user/NewUser';

export const Users = ({ users }) => {
  debugger
  users.map( u => <NewUser key = { u.id } {...u} /> )
  return (
    <div className = "users">
      { users }
    </div>
  )
}