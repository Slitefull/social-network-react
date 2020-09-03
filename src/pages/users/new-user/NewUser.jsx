import React from 'react';

export const NewUser = ({ avatar, name, location, status }) => (
  <div className="user">
    <div className="user__avatar">{ avatar }</div>
    <div className="user__name">{ name }</div>
  </div>
)