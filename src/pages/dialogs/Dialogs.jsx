import React from "react";
import {Redirect} from 'react-router-dom';
import {pages} from '../../consts';
import {DialogsUsersContainer, DialogsMessagesContainer} from './index';

import './Profile.scss';


export const Dialogs = props => {
  if(props.isAuth === false) return <Redirect to={pages.links.authPage} />

  return (
    <main className="profile">
      <DialogsUsersContainer/>
      <DialogsMessagesContainer/>
    </main>
  )
}