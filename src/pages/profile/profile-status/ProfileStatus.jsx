import React from 'react';

export const ProfileStatus = props => (
  <div>
    <div><span>{props.status}</span></div>
    <div><input value={props.status} type="text"/></div>
  </div>
)